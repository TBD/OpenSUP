Google SketchUp Extension

description: 

simple extension that adds 1 to input to give you a head start
in creating Ruby extensions in C


requirements: 

PellesC - free C compiler
http://www.smorgasbordet.com/pellesc/
              
Ruby 1.8.6 Source
ftp://ftp.ruby-lang.org/pub/ruby/1.8/ruby-1.8.6-p287.zip

Ruby 1.8.6 Installer (Windows)
http://rubyforge.org/frs/download.php/47082/ruby186-27_rc2.exe


usage in Ruby:

require 'SUExt'
SUExt.new.add(5)
=> 6
