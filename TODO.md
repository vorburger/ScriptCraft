## ToDo

[ ] Integrated js/plugins/blocklycraft (without Blockly in www/, yet)
     [ ] move main files from plugins/aldo_ben to modules/blocklycraft? or use another sub-folder?
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

[ ] How-to refresh() without restarting the web server? If figured out, then re-enable the commented out httpServer.openURL(); in *BOTH* ScriptCraftPlugin classes

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
     [ ] cleaned up files much, formatting, header, etc. 
