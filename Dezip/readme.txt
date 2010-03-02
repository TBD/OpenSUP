dezip 1.1
by TBD
http://labs.plugins.ro

   desc: Ruby library for unziping files
   date: 14.Sep.2008
credits: using zlib by Jean-loup Gailly and Mark Adler
  usage: 1) require 'Dezip'
         2) Dezip.get_dir(zip_filename_as_string) 
            -> returns array of files in zip
         3) Dezip.get_file(zip_filename_as_string, filename_to_unzip_as_string) 
            -> returns array
            [0] content
            [1] size
    tip: if you want to write unzipped content use binary mode
         e.g. File.new("file.jpg","wb")
license: free for private and commercial use
history: 1.1 14.Sep.2008
             [!] bugfix for stack overflow on big files
         1.0 26.Dec.2007
             first release
