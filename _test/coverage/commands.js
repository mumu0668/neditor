/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['commands.js']) {
  _$jscoverage['commands.js'] = [];
}
_$jscoverage['commands.js'].source = ["<span class=\"c\">//&#26412;&#25991;&#20214;&#38750;&#32534;&#36753;&#22120;&#26680;&#24515;&#25991;&#20214;&#65292;&#20165;&#36866;&#29992;&#20110;&#29983;&#25104;&#23545;&#24212;&#30340;&#21629;&#20196;&#25509;&#21475;&#25991;&#26723;</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * @file</span>","<span class=\"c\"> * @name &#32534;&#36753;&#22120;&#21629;&#20196;&#25509;&#21475;</span>","<span class=\"c\"> * @short Commands</span>","<span class=\"c\"> * @desc</span>","<span class=\"c\"> *</span>","<span class=\"c\"> * UEditor&#20013;&#25191;&#34892;&#21629;&#20196;&#30340;&#32479;&#19968;&#35843;&#29992;&#26684;&#24335;&#20026;</span>","<span class=\"c\"> * &lt;code&gt;editor.execCommand(\"cmdName\"[,opt]);&lt;/code&gt;</span>","<span class=\"c\"> *</span>","<span class=\"c\"> *</span>","<span class=\"c\"> * &#26816;&#27979;&#24403;&#21069;&#21629;&#20196;&#26159;&#21542;&#21487;&#29992;&#30340;&#26041;&#27861;&#26159;</span>","<span class=\"c\"> * &lt;code&gt;editor.queryCommandState(\"cmdName\");&lt;/code&gt;</span>","<span class=\"c\"> *</span>","<span class=\"c\"> *</span>","<span class=\"c\"> * &#37096;&#20998;&#21629;&#20196;&#21487;&#20197;&#36820;&#22238;&#21629;&#20196;&#20540;&#65292;&#20854;&#26684;&#24335;&#20026;</span>","<span class=\"c\"> * &lt;code&gt;editor.queryCommandValue(\"cmdName\");&lt;/code&gt;</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#25554;&#20837;&#38170;&#28857;</span>","<span class=\"c\"> * @name anchor</span>","<span class=\"c\"> * @grammar editor.execCommand(\"anchor\",\"name\"); //&#38170;&#28857;&#30340;&#21517;&#23383;</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#20026;&#24403;&#21069;&#36873;&#20013;&#25991;&#23383;&#28155;&#21152;&#31895;&#20307;&#25928;&#26524;</span>","<span class=\"c\"> * @name bold</span>","<span class=\"c\"> * @grammar editor.execCommand(\"bold\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#20026;&#24403;&#21069;&#36873;&#20013;&#25991;&#23383;&#28155;&#21152;&#26012;&#20307;&#25928;&#26524;</span>","<span class=\"c\"> * @name italic</span>","<span class=\"c\"> * @grammar editor.execCommand(\"italic\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#20026;&#24403;&#21069;&#36873;&#20013;&#25991;&#23383;&#28155;&#21152;&#19979;&#21010;&#32447;&#25928;&#26524;</span>","<span class=\"c\"> * @name underline</span>","<span class=\"c\"> * @grammar editor.execCommand(\"underline\");</span>","<span class=\"c\"> */</span>","","","<span class=\"c\">/**</span>","<span class=\"c\"> * &#20026;&#24403;&#21069;&#36873;&#20013;&#25991;&#23383;&#28155;&#21152;&#21024;&#38500;&#32447;&#25928;&#26524;</span>","<span class=\"c\"> * @name strikethrough</span>","<span class=\"c\"> * @grammar editor.execCommand(\"strikethrough\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#23558;&#24403;&#21069;&#36873;&#20013;&#25991;&#23383;&#36716;&#25442;&#25104;&#19978;&#26631;</span>","<span class=\"c\"> * @name superscript</span>","<span class=\"c\"> * @grammar editor.execCommand(\"superscript\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#23558;&#24403;&#21069;&#36873;&#20013;&#25991;&#23383;&#36716;&#25442;&#25104;&#19979;&#26631;</span>","<span class=\"c\"> * @name subscript</span>","<span class=\"c\"> * @grammar editor.execCommand(\"subscript\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#20026;&#24403;&#21069;&#36873;&#20013;&#25991;&#23383;&#28155;&#21152;&#39068;&#33394;</span>","<span class=\"c\"> * @name foreColor</span>","<span class=\"c\"> * @grammar editor.execCommand(\"foreColor\",\"#ffffff\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#20026;&#24403;&#21069;&#36873;&#20013;&#25991;&#23383;&#28155;&#21152;&#32972;&#26223;&#39068;&#33394;</span>","<span class=\"c\"> * @name backColor</span>","<span class=\"c\"> * @grammar editor.execCommand(\"backColor\",\"#dddddd\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#35774;&#32622;&#24403;&#21069;&#36873;&#20013;&#25991;&#23383;&#30340;&#23383;&#20307;</span>","<span class=\"c\"> * @name fontFamily</span>","<span class=\"c\"> * @grammar editor.execCommand(\"fontFamily\",\"&#24494;&#36719;&#38597;&#40657;,Microsoft YaHei\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#35774;&#32622;&#24403;&#21069;&#36873;&#20013;&#25991;&#23383;&#30340;&#23383;&#21495;</span>","<span class=\"c\"> * @name fontSize</span>","<span class=\"c\"> * @grammar editor.execCommand(\"fontSize\",\"32px\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#35774;&#32622;&#24403;&#21069;&#36873;&#21306;&#30340;&#27573;&#33853;&#26684;&#24335;,&#22914;p,h1,h2,h3,...</span>","<span class=\"c\"> * @name paragraph</span>","<span class=\"c\"> * @grammar editor.execCommand(\"paragraph\",\"h1\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#23558;&#24403;&#21069;&#36873;&#21306;&#21464;&#25442;&#25104;&#26377;&#24207;&#25110;&#32773;&#26080;&#24207;&#21015;&#34920;</span>","<span class=\"c\"> * @name insert(Un)OrderedList</span>","<span class=\"c\"> * @grammar editor.execCommand(\"insertOrderedList\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#35774;&#32622;&#24403;&#21069;&#36873;&#21306;&#30340;&#34892;&#38388;&#36317;</span>","<span class=\"c\"> * @name lineHeight</span>","<span class=\"c\"> * @grammar editor.execCommand(\"lineHeight\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#35774;&#32622;&#24403;&#21069;&#36873;&#21306;&#20013;&#30340;&#23383;&#20307;&#23545;&#40784;&#26041;&#24335;</span>","<span class=\"c\"> * @name justify</span>","<span class=\"c\"> * @grammar editor.execCommand(\"justify\",align);  //align&#21487;&#20026;Left&#65292;Right&#65292;Center&#65292;Justify</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#23558;&#24403;&#21069;&#36873;&#20013;&#25991;&#23383;&#20013;&#30340;&#23383;&#27597;&#36716;&#25442;&#25104;&#22823;&#20889;</span>","<span class=\"c\"> * @name toUppercase</span>","<span class=\"c\"> * @grammar editor.execCommand(\"toUppercase\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#23558;&#24403;&#21069;&#36873;&#20013;&#25991;&#23383;&#20013;&#30340;&#23383;&#27597;&#36716;&#25442;&#25104;&#23567;&#20889;</span>","<span class=\"c\"> * @name toLowercase</span>","<span class=\"c\"> * @grammar editor.execCommand(\"toLowercase\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#20026;&#24403;&#21069;&#36873;&#21306;&#25152;&#22312;&#30340;&#22359;&#32423;&#20803;&#32032;&#28155;&#21152;&#24341;&#29992;&#26631;&#35760;</span>","<span class=\"c\"> * @name blockquote</span>","<span class=\"c\"> * @grammar editor.execCommand(\"blockquote\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#35774;&#32622;&#24403;&#21069;&#36873;&#21306;&#25152;&#22312;&#22359;&#32423;&#20803;&#32032;&#30340;&#25991;&#23383;&#36755;&#20837;&#26041;&#21521;</span>","<span class=\"c\"> * @name directionality</span>","<span class=\"c\"> * @grammar editor.execCommand(\"directionality\",dir);  //dir&#21487;&#20026;LTR,RTL</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#28165;&#38500;&#24403;&#21069;&#36873;&#20013;&#25991;&#23383;&#19978;&#30340;&#25152;&#26377;&#26679;&#24335;&#25110;&#32773;&#25351;&#23450;&#26679;&#24335;</span>","<span class=\"c\"> * @name removeFormat</span>","<span class=\"c\"> * @grammar editor.execCommand(\"removeFormat\")   //&#26681;&#25454;neditor.config.js&#37324;&#30340;removeFormatTags&#65292;removeFormatAttributes&#20004;&#20010;&#23646;&#24615;&#20316;&#20026;&#35268;&#21017;</span>","<span class=\"c\"> * @grammar editor.execCommand(\"removeFormat\",tags,style);   //&#28165;&#38500;&#25351;&#23450;tags&#19978;&#30340;&#25351;&#23450;style</span>","<span class=\"c\"> * @example</span>","<span class=\"c\"> * editor.execCommand(\"removeFormat\",'span,a','color,background-color')</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#20999;&#25442;&#32431;&#25991;&#26412;&#31896;&#36148;&#27169;&#24335;</span>","<span class=\"c\"> * @name pastePlain</span>","<span class=\"c\"> * @grammar ue.execCommand(\"pastePlain\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#24320;&#21551;&#26684;&#24335;&#21047;&#21151;&#33021;</span>","<span class=\"c\"> * @name formatMatch</span>","<span class=\"c\"> * @grammar editor.execCommand(\"formatMatch\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#28165;&#31354;&#25991;&#26723;</span>","<span class=\"c\"> * @name clearDoc</span>","<span class=\"c\"> * @grammar editor.execCommand(\"clearDoc\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#21024;&#38500;&#24403;&#21069;&#36873;&#20013;&#25991;&#26412;</span>","<span class=\"c\"> * @name delete</span>","<span class=\"c\"> * @grammar editor.execCommand(\"delete\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#20840;&#37096;&#36873;&#25321;</span>","<span class=\"c\"> * @name selectAll</span>","<span class=\"c\"> * @grammar editor.execCommand(\"selectAll\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#25764;&#38144;&#25805;&#20316;</span>","<span class=\"c\"> * @name undo</span>","<span class=\"c\"> * @grammar editor.execCommand(\"undo\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#24674;&#22797;&#25805;&#20316;</span>","<span class=\"c\"> * @name redo</span>","<span class=\"c\"> * @grammar editor.execCommand(\"redo\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#23545;&#25972;&#20010;&#32534;&#36753;&#25991;&#26723;&#36827;&#34892;&#33258;&#21160;&#25490;&#29256;</span>","<span class=\"c\"> * @name autoTypeset</span>","<span class=\"c\"> * @grammar editor.execCommand(\"autoTypeset\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#22312;&#24403;&#21069;&#36873;&#21306;&#20301;&#32622;&#25554;&#20837;&#19968;&#27573;html&#20195;&#30721;&#65292;&#26368;&#22522;&#26412;&#21151;&#33021;&#12290;&#22823;&#37096;&#20998;&#20854;&#20182;&#25554;&#20837;&#21629;&#20196;&#37117;&#20250;&#35843;&#29992;&#27492;&#21629;&#20196;&#23436;&#25104;&#26368;&#21518;&#30340;&#25554;&#20837;</span>","<span class=\"c\"> * @name insertHtml</span>","<span class=\"c\"> * @grammar editor.execCommand(\"insertHtml\",\"&#27426;&#36814;&#20351;&#29992;UEditor&#65281;\")</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#22312;&#24403;&#21069;&#36873;&#21306;&#20301;&#32622;&#25554;&#20837;&#19968;&#20010;&#36229;&#38142;&#25509;</span>","<span class=\"c\"> * @name link</span>","<span class=\"c\"> * @grammar editor.execCommand(\"link\",linkObj);</span>","<span class=\"c\"> * @example</span>","<span class=\"c\"> * editor.execCommand(\"link\",{</span>","<span class=\"c\"> *     href: \"http://ueditor.baidu.com\",         //&#36229;&#38142;&#22320;&#22336;&#65292;&#24517;&#36873;</span>","<span class=\"c\"> *     _src: \"http://ueditor.baidu.com\",  //UE&#20869;&#37096;&#20351;&#29992;&#21442;&#25968;&#65292;&#19982;href&#20445;&#25345;&#19968;&#33268;&#21363;&#21487;&#65292;&#21487;&#36873;</span>","<span class=\"c\"> *     target: \"_self\",                          //&#30446;&#26631;&#31383;&#21475;&#65292;&#21487;&#36873;</span>","<span class=\"c\"> *     textValue: \"UEditor\",                     //&#38142;&#25509;&#26174;&#31034;&#25991;&#26412;&#65292;&#21487;&#36873;</span>","<span class=\"c\"> *     title: \"&#30334;&#24230;&#24320;&#28304;&#23500;&#25991;&#26412;&#32534;&#36753;&#22120;UEditor&#23448;&#32593;\"     //&#26631;&#39064;&#65292;&#21487;&#36873;</span>","<span class=\"c\"> * })</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#22312;&#24403;&#21069;&#36873;&#21306;&#20301;&#32622;&#25554;&#20837;&#19968;&#20010;&#22270;&#29255;</span>","<span class=\"c\"> * @name insertImage</span>","<span class=\"c\"> * @grammar editor.execCommand(\"insertImage\",imageObj);</span>","<span class=\"c\"> * @example</span>","<span class=\"c\"> * editor.execCommand(\"insertImage\",{</span>","<span class=\"c\"> *     src: \"http://ueditor.baidu.com/logo.jpg\",          //&#22270;&#29255;&#38142;&#25509;&#22320;&#22336;,&#24517;&#36873;</span>","<span class=\"c\"> *     _src: \"http://ueditor.baidu.com/logo.jpg\",  //UE&#20869;&#37096;&#20351;&#29992;&#21442;&#25968;&#65292;&#19982;src&#20445;&#25345;&#19968;&#33268;&#21363;&#21487;&#65292;&#21487;&#36873;</span>","<span class=\"c\"> *     width: 300,                                        //&#22270;&#29255;&#26174;&#31034;&#23485;&#24230;&#65292;&#21487;&#36873;</span>","<span class=\"c\"> *     height: 400,                                       //&#22270;&#29255;&#26174;&#31034;&#39640;&#24230;&#65292;&#21487;&#36873;</span>","<span class=\"c\"> *     border: 2,                                         //&#22270;&#29255;&#36793;&#26694;&#65292;&#21487;&#36873;</span>","<span class=\"c\"> *     hspace: 5,                                         //&#22270;&#29255;&#24038;&#21491;&#36793;&#36317;&#65292;&#21487;&#36873;</span>","<span class=\"c\"> *     vspace: 2,                                         //&#22270;&#29255;&#19978;&#19979;&#36793;&#36317;&#65292;&#21487;&#36873;</span>","<span class=\"c\"> *     alt: 'UEditor-logo',                               //&#22270;&#29255;&#26367;&#25442;&#25991;&#23383;&#65292;&#21487;&#36873;</span>","<span class=\"c\"> *     title: \"&#30334;&#24230;&#24320;&#28304;&#23500;&#25991;&#26412;&#32534;&#36753;&#22120;UEditor&#23448;&#32593;\"             //&#22270;&#29255;&#26631;&#39064;&#65292;&#21487;&#36873;</span>","<span class=\"c\"> * })</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#22312;&#24403;&#21069;&#36873;&#21306;&#20301;&#32622;&#25554;&#20837;&#19968;&#20010;&#35270;&#39057;</span>","<span class=\"c\"> * @name insertVideo</span>","<span class=\"c\"> * @grammar editor.execCommand(\"insertVideo\",videoObj);</span>","<span class=\"c\"> * @example</span>","<span class=\"c\"> * editor.execCommand(\"insertVideo\",{</span>","<span class=\"c\"> *     url: \"http://youku.com/id?id=1233122\",   //&#35270;&#39057;&#22320;&#22336;&#65292;&#24517;&#36873;</span>","<span class=\"c\"> *     width: 420,                              //&#35270;&#39057;&#23485;&#24230;&#65292;&#21487;&#36873;</span>","<span class=\"c\"> *     height: 280,                             //&#35270;&#39057;&#39640;&#24230;&#65292;&#21487;&#36873;</span>","<span class=\"c\"> *     align: \"none\"                            //&#23545;&#40784;&#26041;&#24335;&#65292;&#25903;&#25345;right&#65292;left&#65292;center&#65292;none &#65292;&#21487;&#36873;</span>","<span class=\"c\"> * })</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#22312;&#24403;&#21069;&#36873;&#21306;&#20301;&#32622;&#25554;&#20837;&#19968;&#20010;&#26085;&#26399;&#25110;&#32773;&#26102;&#38388;</span>","<span class=\"c\"> * @name date|time</span>","<span class=\"c\"> * @grammar editor.execCommand(\"date\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#22312;&#24403;&#21069;&#36873;&#21306;&#20301;&#32622;&#25554;&#20837;&#19968;&#20010;&#20998;&#39029;&#31526;&#26631;&#35760;</span>","<span class=\"c\"> * @name pageBreak</span>","<span class=\"c\"> * @grammar editor.execCommand(\"pageBreak\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#20999;&#25442;&#28304;&#30721;&#32534;&#36753;&#27169;&#24335;&#21644;&#23500;&#25991;&#26412;&#32534;&#36753;&#27169;&#24335;</span>","<span class=\"c\"> * @name source</span>","<span class=\"c\"> * @grammar editor.execCommand(\"source\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * IE&#19979;&#36827;&#20837;&#25130;&#23631;&#27169;&#24335;</span>","<span class=\"c\"> * @name snapScreen</span>","<span class=\"c\"> * @grammar editor.execCommand(\"snapScreen\");</span>","<span class=\"c\"> */</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#25554;&#20837;&#34920;&#26684;</span>","<span class=\"c\"> * @name insertTable</span>","<span class=\"c\"> * @grammar editor.execCommand(\"insertTable\",rows,cols);</span>","<span class=\"c\"> */</span>","","<span class=\"c\">/**</span>","<span class=\"c\"> * &#26597;&#25214;&#26367;&#25442;</span>","<span class=\"c\"> * @name searchreplace</span>","<span class=\"c\"> * @grammar editor.execCommand(\"searchreplace\",opt);</span>","<span class=\"c\"> * @desc</span>","<span class=\"c\"> * opt&#26159;&#20010;json&#23545;&#35937;,&#23646;&#24615;&#22914;&#19979;</span>","<span class=\"c\"> * * ''all'' true&#34920;&#31034;&#26597;&#25214;&#25972;&#20010;&#25991;&#26723;&#65292;false&#34920;&#31034;&#20174;&#19978;&#27425;&#30340;&#20301;&#32622;&#24320;&#22987;&#26597;&#25214;,&#40664;&#35748;&#26159;false</span>","<span class=\"c\"> * * ''casesensitive'' &#22823;&#23567;&#20889;&#38125;&#24863;&#65292;true&#26159;&#38125;&#24863;,&#40664;&#35748;&#26159;false</span>","<span class=\"c\"> * * ''dir'' 1&#34920;&#31034;&#20174;&#21069;&#24448;&#21518;&#26597;&#65292;&#65293;1&#34920;&#31034;&#20174;&#21518;&#24448;&#21069;</span>","<span class=\"c\"> * * ''searchStr'' &#26597;&#25214;&#30340;&#23383;&#31526;&#20018;</span>","<span class=\"c\"> * * ''replaceStr'' &#26367;&#25442;&#29992;&#30340;&#23383;&#31526;&#20018;</span>","<span class=\"c\"> */</span>","","","","","","","","",""];
