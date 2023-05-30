 <?php
    $FileName = $_FILES['file']['file'];
    $TmpName = $_FILES['file']['file'];
    move_uploaded_file($TmpName,$FileName);
    echo('File uploaded sucessfully')
 ?>
 