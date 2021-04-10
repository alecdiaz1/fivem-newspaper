fx_version 'cerulean'
games { 'gta5' }

author 'Alec Diaz'
description 'Create and read newspapers'
version '1.0.0'

client_script {
  'client/*.lua',
}

server_script {
  'server/*.lua'
}

ui_page 'html/index.html'

files {
  'html/index.html',
  'html/main.js'
}