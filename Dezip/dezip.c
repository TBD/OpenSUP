#include "ruby.h"
#include "rubysig.h"
#include <windows.h>

#include "unzip.h"

#define BUF_SIZE 500

VALUE cDezip;

// get array of files inside a zip
static VALUE get_dir(VALUE self, VALUE zipfile)
{
    unzFile *zp; 
    VALUE ret_arr;
    unz_file_info file_info;
    char  tmpfilename[BUF_SIZE];
    int err=UNZ_OK;
    
    if (TYPE(zipfile) != T_STRING)
    {
      rb_raise(rb_eTypeError, "%s is not a string filename", StringValuePtr(zipfile));
    }
    
    zp = unzOpen(StringValuePtr(zipfile));
    ret_arr = rb_ary_new();
    
    if (unzGoToFirstFile(zp) == UNZ_OK)
    {  
        while (err == UNZ_OK)
        {
            unzGetCurrentFileInfo(zp,&file_info,tmpfilename,BUF_SIZE,NULL,0,NULL,0);
            rb_ary_push(ret_arr, rb_str_new2(tmpfilename));
            err = unzGoToNextFile(zp);
        }
    }
    else {
        rb_raise(rb_eRuntimeError, "no compressed files in the zip");
    }
    
    return ret_arr;
    
}

static VALUE dezip_file(VALUE self, VALUE zipfile, VALUE filename)
{
    unzFile *zp; 
    unz_file_info file_info;
    int err=UNZ_OK;
    VALUE ret_arr;
    VALUE buffer;
    
    
    zp = unzOpen(StringValuePtr(zipfile)); 
    if(!zp) 
    {
        rb_raise(rb_eRuntimeError, "cannot open compressed package"); 
    }
    
    if(unzLocateFile(zp, StringValuePtr(filename), 2)!=UNZ_OK || unzOpenCurrentFile(zp)!=UNZ_OK) 
    { 
        unzClose(zp);     
        rb_raise(rb_eRuntimeError, "cannot find file %s",StringValuePtr(filename));
    } 
    
    err = unzGetCurrentFileInfo(zp,&file_info,StringValuePtr(filename),sizeof(StringValuePtr(filename)),NULL,0,NULL,0);
    buffer = rb_str_new(0, file_info.uncompressed_size);
    
    unzReadCurrentFile(zp, RSTRING(buffer)->ptr, file_info.uncompressed_size); 
    unzCloseCurrentFile(zp); 
    unzClose(zp);
    
    // return array with 2 items
    // [0] = file content
    // [1] = uncompressed size
    ret_arr = rb_ary_new();
    rb_ary_push(ret_arr, buffer);
    rb_ary_push(ret_arr, INT2NUM(file_info.uncompressed_size));
    
    return ret_arr;
}


void Init_Dezip() {
  cDezip = rb_define_class("Dezip", rb_cObject);
  rb_define_singleton_method(cDezip, "get_dir", get_dir, 1);
  rb_define_singleton_method(cDezip, "get_file", dezip_file, 2);
}
