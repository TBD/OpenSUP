
SHELL = /bin/sh

#### Start of system configuration section. ####

srcdir = c:/y
topdir = c:/progra~1/ruby/lib/ruby/1.8/i386-mswin32
hdrdir = $(topdir)
VPATH = $(srcdir)

DESTDIR = c:
prefix = $(DESTDIR)/progra~1/ruby
exec_prefix = $(prefix)
bindir = $(exec_prefix)/bin
sitelibdir = $(sitedir)/$(ruby_version)
datadir = $(prefix)/share
sitedir = $(prefix)/lib/ruby/site_ruby
sharedstatedir = $(DESTDIR)/etc
archdir = $(rubylibdir)/$(arch)
localstatedir = $(DESTDIR)/var
infodir = $(prefix)/info
oldincludedir = $(DESTDIR)/usr/include
libexecdir = $(exec_prefix)/libexec
compile_dir = $(DESTDIR)/Home/arton/ruby-1.8.2/win32
sbindir = $(exec_prefix)/sbin
includedir = $(prefix)/include
sysconfdir = $(prefix)/etc
sitearchdir = $(sitelibdir)/$(sitearch)
mandir = $(prefix)/man
libdir = $(exec_prefix)/lib
rubylibdir = $(libdir)/ruby/$(ruby_version)

CC = cl -nologo
LIBRUBY = $(RUBY_SO_NAME).lib
LIBRUBY_A = $(RUBY_SO_NAME)-static.lib
LIBRUBYARG_SHARED = $(LIBRUBY)
LIBRUBYARG_STATIC = $(LIBRUBY_A)

# CFLAGS   =  -MD -Zi -G6 
CFLAGS   =  /nologo /W3 /EHsc /Zi /O2 /I "c:/progra~1/ruby/lib/ruby/1.8/i386-mswin32" /D "ZLIB_WINAPI" /FD /c
CPPFLAGS = -I. -I$(topdir) -I$(hdrdir) -I$(srcdir) -DEBUG -I. -I./.. -I./../missing -I"c:\Program Files\Microsoft Visual Studio\VC98\Include" 
CXXFLAGS = $(CFLAGS) 
DLDFLAGS =  -link -incremental:no -dll $(LIBPATH) -def:$(DEFFILE) /OPT:REF zlibstat.lib 
LDSHARED = cl -nologo -LD
AR = lib -nologo
EXEEXT = .exe

RUBY_INSTALL_NAME = ruby
RUBY_SO_NAME = msvcrt-ruby18
arch = i386-mswin32
sitearch = i386-msvcrt
ruby_version = 1.8
ruby = c:/progra~1/ruby/bin/ruby
RUBY = $(ruby:/=\)
RM = $(RUBY) -run -e rm -- -f
MAKEDIRS = $(RUBY) -run -e mkdir -- -p
INSTALL_PROG = $(RUBY) -run -e install -- -vpm 0755
INSTALL_DATA = $(RUBY) -run -e install -- -vpm 0644

#### End of system configuration section. ####


LIBPATH =  -libpath:"$(libdir)"
DEFFILE = $(TARGET)-$(arch).def

CLEANFILES = 
DISTCLEANFILES = $(DEFFILE)

target_prefix = 
LOCAL_LIBS = 
LIBS = $(LIBRUBYARG_SHARED)  oldnames.lib advapi32.lib user32.lib 
OBJS = dezip.obj 
TARGET = Dezip
DLLIB = $(TARGET).so
STATIC_LIB = $(TARGET).lib

RUBYCOMMONDIR = $(sitedir)$(target_prefix)
RUBYLIBDIR    = $(sitelibdir)$(target_prefix)
RUBYARCHDIR   = $(sitearchdir)$(target_prefix)

CLEANLIBS     = "$(TARGET).{lib,exp,il?,tds,map}" $(DLLIB)
CLEANOBJS     = "*.{obj,lib,s[ol],pdb,bak}"

all:		$(DLLIB)
static:		$(STATIC_LIB)

clean:
		@$(RM) $(CLEANLIBS) $(CLEANOBJS) $(CLEANFILES)

distclean:	clean
		@$(RM) Makefile extconf.h conftest.* mkmf.log
		@$(RM) core ruby$(EXEEXT) *~ $(DISTCLEANFILES)

realclean:	distclean
install: $(RUBYARCHDIR)
install: $(RUBYARCHDIR)/$(DLLIB)
$(RUBYARCHDIR)/$(DLLIB): $(DLLIB) $(RUBYARCHDIR)
	@$(INSTALL_PROG) $(DLLIB) $(RUBYARCHDIR)
$(RUBYARCHDIR):
	@$(MAKEDIRS) $(RUBYARCHDIR)

site-install: install

.SUFFIXES: .c .cc .m .cxx .cpp .C .obj

{$(srcdir)}.cc{}.obj:
	$(CXX) $(CXXFLAGS) $(CPPFLAGS) -c -Tp$(<:\=/)

.cc.obj:
	$(CXX) $(CXXFLAGS) $(CPPFLAGS) -c -Tp$(<:\=/)

{$(srcdir)}.cpp{}.obj:
	$(CXX) $(CXXFLAGS) $(CPPFLAGS) -c -Tp$(<:\=/)

.cpp.obj:
	$(CXX) $(CXXFLAGS) $(CPPFLAGS) -c -Tp$(<:\=/)

{$(srcdir)}.cxx{}.obj:
	$(CXX) $(CXXFLAGS) $(CPPFLAGS) -c -Tp$(<:\=/)

.cxx.obj:
	$(CXX) $(CXXFLAGS) $(CPPFLAGS) -c -Tp$(<:\=/)

{$(srcdir)}.C{}.obj:
	$(CXX) $(CXXFLAGS) $(CPPFLAGS) -c -Tp$(<:\=/)

.C.obj:
	$(CXX) $(CXXFLAGS) $(CPPFLAGS) -c -Tp$(<:\=/)

{$(srcdir)}.c{}.obj:
	$(CC) $(CFLAGS) $(CPPFLAGS) -c -Tc$(<:\=/)

.c.obj:
	$(CC) $(CFLAGS) $(CPPFLAGS) -c -Tc$(<:\=/)

$(DLLIB): $(OBJS) $(DEFFILE)
	@-$(RM) $@
	@-$(RM) $(TARGET).lib
	$(LDSHARED) -Fe$(@) $(OBJS) $(LIBS) $(LOCAL_LIBS) $(DLDFLAGS)
   copy dezip.so "c:\Program Files\Google\Google SketchUp 7\Plugins\dezip.so" 

$(STATIC_LIB): $(OBJS)
	$(AR) -machine:x86 -out:$@ $(OBJS)

$(DEFFILE): 
	$(RUBY) -e "puts 'EXPORTS', 'Init_$(TARGET)'"  > $@

