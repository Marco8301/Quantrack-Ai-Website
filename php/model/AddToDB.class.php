<?php

class AddToDB {
    function __construct($inputName, $inputEmail, $inputCompany, $inputPosition) {
        $this->inputName = $inputName;
        $this->inputEmail = $inputEmail;
        $this->inputCompany = $inputCompany;
        $this->inputPosition = $inputPosition;
    }

    function submitForm() {
        include('PDO.class.php');

        $request = 'INSERT INTO users (time_submit, inputName, inputEmail, inputCompany, inputPosition)
        VALUES (NOW(), :inputName, :inputEmail, :inputCompany, :inputPosition)';

        $submit = $db->prepare($request);

        $submit->execute([
            ':inputName' => $this->inputName,
            ':inputEmail' => $this->inputEmail,
            ':inputCompany' => $this->inputCompany,
            ':inputPosition' => $this->inputPosition,
        ]);
    } 
}

?>

