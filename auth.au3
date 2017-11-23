Local $classForBasicAuthWindow = "[CLASS:MozillaDialogClass]";

;ожидание появления окна 10 секунд
WinWait($classForBasicAuthWindow, "", 10)

If WinExists($classForBasicAuthWindow) Then
    WinActivate($classForBasicAuthWindow)

Send("aerobatic")
Send("{TAB}")
Send("aerobatic")
Send("{ENTER}")

EndIf