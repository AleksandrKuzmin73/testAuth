Local $classForBasicAuthWindow = "[CLASS:MozillaDialogClass]";

;�������� ��������� ���� 10 ������
WinWait($classForBasicAuthWindow, "", 10)

If WinExists($classForBasicAuthWindow) Then
    WinActivate($classForBasicAuthWindow)

Send("aerobatic")
Send("{TAB}")
Send("aerobatic")
Send("{ENTER}")

EndIf