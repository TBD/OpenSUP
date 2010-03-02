<?
  // header('Content-Disposition: attachment; filename="test.rb"' );
  $a = $HTTP_POST_VARS;
  $out = explode("|", $a["data"]);
  echo "<pre>";
  foreach ($out as $i) {
    $file = $i . ".rb";
    if ($handle = @fopen($file, "rb"))
    {
      echo fread($handle, filesize($file));
      fclose($handle);
    }
  }
  echo "</pre>";
?>
