<?php

if(isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['age']))
{
	$message = 'Bonjour '.$_POST['prenom'].' '.$_POST['nom'].': '.$_POST['age'].' ans';
	echo json_encode(array('message'=> $message));
}