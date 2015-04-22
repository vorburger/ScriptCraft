## ToDo

[ ] Integrated js/plugins/blocklycraft (without Blockly in www/, yet)
     [ ] move main files from plugins/aldo_ben to modules/blocklycraft? or use another sub-folder?
     [ ] file header, @author Lauro Canonica (?): Original author; Michael Vorburger: Clean-up for initial ScriptCraft Git contribution
[ ] Web Server handles POST to update JS files, under fixed folder
     [ ] Bundle BlocklyCraft
     [ ] support Save, using POST instead of GET)
[ ] Prepare to release
     [ ] double check with Lauro where former plugins/utils.js now modules/utils/utils.js with watchFile() is originally from?!
     [ ] git rm 127001_clientScript.js
     [ ] Lauro review.. test on Win, note my \ to / change, still works?
     [ ] TODO.md clean-up, squash
     [ ] Then Git squash, pull-request!
     [ ] Video, Blog, Tweet..

[ ] BlocklyCraft: Translate Italian-only blocks

[ ] Maven build instead of build.xml?


## Done

# 2015.04.19
[X] Given hugely successful Devoxx4Kids workshop in Lugano, Ticino, Switzerland using this ScriptCraft + BlocklyCraft ;)
[X] Integrated Web Server
      * Can serve static files
      * HTTP host and port configured via -Dorg.scriptcraftjs.webserver.WebServer.port and *.host
      * HTTP Request/Response details logging intentionally disabled
      * Automatically opens web browser

# 2015.04.22
[ ] Integrated js/plugins/blocklycraft (without Blockly in www/, yet)
     [ ] copy 2-3 files, works! now showing in Git.
     [ ] remove hard-coded path.. avoid error on start-up
     [ ] clean up files... 
