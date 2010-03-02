require 'Dezip'

file = "test.skm"

# get_dir returns an array with files inside zip
zip_content = Dezip.get_dir(file)
p zip_content

# get_file returns an array
# [0] - content
# [1] - unzipped file size
unzipped = Dezip.get_file(file, zip_content[1])
p unzipped[1]