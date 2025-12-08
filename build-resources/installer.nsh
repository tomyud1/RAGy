; RAGy Custom NSIS Installer Script

!macro customHeader
  ; Show installation details (progress log)
  ShowInstDetails show
  ShowUnInstDetails show
!macroend

!macro customInit
  ; Initialize custom installation directory
  StrCpy $INSTDIR "$PROGRAMFILES64\RAGy"
!macroend

!macro customInstall
  ; Show status during installation
  DetailPrint "Creating application directories..."
  
  ; Create data directories in the installation folder
  CreateDirectory "$INSTDIR\data"
  DetailPrint "Created: $INSTDIR\data"
  
  CreateDirectory "$INSTDIR\data\projects"
  DetailPrint "Created: $INSTDIR\data\projects"
  
  CreateDirectory "$INSTDIR\data\memory"
  DetailPrint "Created: $INSTDIR\data\memory"
  
  CreateDirectory "$INSTDIR\data\settings"
  DetailPrint "Created: $INSTDIR\data\settings"
  
  CreateDirectory "$INSTDIR\uploads"
  DetailPrint "Created: $INSTDIR\uploads"
  
  CreateDirectory "$INSTDIR\conversions"
  DetailPrint "Created: $INSTDIR\conversions"
  
  DetailPrint "Writing registry entries..."
  WriteRegStr HKLM "Software\RAGy" "InstallPath" "$INSTDIR"
  WriteRegStr HKCU "Software\RAGy" "InstallPath" "$INSTDIR"
  
  DetailPrint "Installation completed successfully!"
!macroend

!macro customUnInstall
  DeleteRegKey HKLM "Software\RAGy"
  DeleteRegKey HKCU "Software\RAGy"
!macroend
