// general Windows
#pragma comment(lib, "kernel32.lib")
#pragma comment(lib, "gdi32.lib")
#pragma comment(lib, "user32.lib")
#pragma comment(lib, "shell32.lib")

// Ruby
#define HAVE_ISINF 1  // isinf macro redefinition workaround
#pragma comment(lib, "msvcrt-ruby18.lib");

// DLL
#pragma comment(lib, "crt.lib");

#include <windows.h>

// Ruby headers 
#include "ruby.h"

// Defining a space for information and references about the module to be stored internally
VALUE SUExt = Qnil;

// our function
VALUE method_add(VALUE self, VALUE input) {
	int i = NUM2INT(input);
	return INT2NUM(i + 1);
}

// The initialization method for this module
void Init_SUExt(void) {
	SUExt = rb_define_class("SUExt", rb_cObject);
	rb_define_method(SUExt, "add", method_add, 1);
}

