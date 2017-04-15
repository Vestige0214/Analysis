J$.iids = {"8":[11,34,12,73],"9":[2,53,2,80],"10":[10,53,10,87],"17":[2,53,2,80],"25":[2,53,2,80],"33":[3,57,3,70],"41":[3,57,3,70],"49":[3,57,3,70],"57":[4,61,4,72],"65":[4,61,4,72],"73":[4,61,4,72],"81":[5,59,5,75],"89":[5,59,5,75],"97":[5,59,5,75],"105":[8,53,8,61],"113":[8,76,8,84],"121":[8,53,8,85],"123":[8,53,8,75],"129":[8,53,8,85],"137":[8,53,8,85],"145":[9,33,9,46],"153":[9,54,9,71],"161":[9,33,9,71],"169":[9,33,9,72],"177":[10,33,10,46],"185":[10,53,10,70],"193":[10,73,10,87],"201":[10,33,10,87],"209":[10,33,10,88],"217":[11,34,11,42],"225":[11,64,11,70],"233":[11,34,11,71],"235":[11,34,11,63],"241":[11,72,11,73],"249":[11,34,11,74],"257":[12,33,12,41],"265":[12,63,12,69],"273":[12,33,12,70],"275":[12,33,12,62],"281":[12,71,12,72],"289":[12,33,12,73],"297":[12,87,12,100],"305":[11,33,12,101],"307":[11,33,12,86],"313":[11,33,12,102],"321":[7,30,13,30],"329":[7,30,13,30],"337":[7,30,13,30],"345":[7,30,13,30],"353":[7,29,13,33],"361":[7,29,13,34],"369":[1,1,14,25],"377":[1,1,14,25],"385":[1,1,14,25],"393":[1,1,14,25],"401":[1,1,14,25],"409":[7,30,13,30],"417":[7,30,13,30],"425":[1,1,14,25],"433":[1,1,14,25],"nBranches":2,"originalCodeFileName":"d77942639768683203e275116552bf6a.js","instrumentedCodeFileName":"d77942639768683203e275116552bf6a_jalangi_.js","code":"\n                            var vanilla_forum_url = 'http://forums.mmorpg.com/';\n                            var vanilla_comments_none = 'No Comments';\n                            var vanilla_comments_singular = '1 Comment';\n                            var vanilla_comments_plural = '[num] Comments';\n\n                            (function() {\n                                var vanilla_count = document.createElement('script');\n                                vanilla_count.type = 'text/javascript';\n                                vanilla_count.src = vanilla_forum_url + '/js/count.js';\n                                (document.getElementsByTagName('head')[0] ||\n                                document.getElementsByTagName('body')[0]).appendChild(vanilla_count);\n                            })();\n                        "};
jalangiLabel97:
    while (true) {
        try {
            J$.Se(369, 'd77942639768683203e275116552bf6a_jalangi_.js', 'd77942639768683203e275116552bf6a.js');
            J$.N(377, 'vanilla_forum_url', vanilla_forum_url, 0);
            J$.N(385, 'vanilla_comments_none', vanilla_comments_none, 0);
            J$.N(393, 'vanilla_comments_singular', vanilla_comments_singular, 0);
            J$.N(401, 'vanilla_comments_plural', vanilla_comments_plural, 0);
            var vanilla_forum_url = J$.X1(25, J$.W(17, 'vanilla_forum_url', J$.T(9, 'http://forums.mmorpg.com/', 21, false), vanilla_forum_url, 3));
            var vanilla_comments_none = J$.X1(49, J$.W(41, 'vanilla_comments_none', J$.T(33, 'No Comments', 21, false), vanilla_comments_none, 3));
            var vanilla_comments_singular = J$.X1(73, J$.W(65, 'vanilla_comments_singular', J$.T(57, '1 Comment', 21, false), vanilla_comments_singular, 3));
            var vanilla_comments_plural = J$.X1(97, J$.W(89, 'vanilla_comments_plural', J$.T(81, '[num] Comments', 21, false), vanilla_comments_plural, 3));
            J$.X1(361, J$.F(353, J$.T(345, function () {
                jalangiLabel96:
                    while (true) {
                        try {
                            J$.Fe(321, arguments.callee, this, arguments);
                            arguments = J$.N(329, 'arguments', arguments, 4);
                            J$.N(337, 'vanilla_count', vanilla_count, 0);
                            var vanilla_count = J$.X1(137, J$.W(129, 'vanilla_count', J$.M(121, J$.R(105, 'document', document, 2), 'createElement', 0)(J$.T(113, 'script', 21, false)), vanilla_count, 1));
                            J$.X1(169, J$.P(161, J$.R(145, 'vanilla_count', vanilla_count, 0), 'type', J$.T(153, 'text/javascript', 21, false), 0));
                            J$.X1(209, J$.P(201, J$.R(177, 'vanilla_count', vanilla_count, 0), 'src', J$.B(10, '+', J$.R(185, 'vanilla_forum_url', vanilla_forum_url, 1), J$.T(193, '/js/count.js', 21, false), 0), 0));
                            J$.X1(313, J$.M(305, J$.C(8, J$.G(249, J$.M(233, J$.R(217, 'document', document, 2), 'getElementsByTagName', 0)(J$.T(225, 'head', 21, false)), J$.T(241, 0, 22, false), 4)) ? J$._() : J$.G(289, J$.M(273, J$.R(257, 'document', document, 2), 'getElementsByTagName', 0)(J$.T(265, 'body', 21, false)), J$.T(281, 0, 22, false), 4), 'appendChild', 0)(J$.R(297, 'vanilla_count', vanilla_count, 0)));
                        } catch (J$e) {
                            J$.Ex(409, J$e);
                        } finally {
                            if (J$.Fr(417))
                                continue jalangiLabel96;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 321), 0)());
        } catch (J$e) {
            J$.Ex(425, J$e);
        } finally {
            if (J$.Sr(433)) {
                J$.L();
                continue jalangiLabel97;
            } else {
                J$.L();
                break jalangiLabel97;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
