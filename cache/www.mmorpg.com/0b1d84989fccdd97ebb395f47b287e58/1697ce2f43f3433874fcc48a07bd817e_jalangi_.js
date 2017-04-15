J$.iids = {"8":[11,7,12,46],"9":[2,29,2,56],"10":[10,26,10,60],"17":[2,29,2,56],"25":[2,29,2,56],"33":[3,33,3,46],"41":[3,33,3,46],"49":[3,33,3,46],"57":[4,37,4,48],"65":[4,37,4,48],"73":[4,37,4,48],"81":[5,35,5,51],"89":[5,35,5,51],"97":[5,35,5,51],"105":[8,26,8,34],"113":[8,49,8,57],"121":[8,26,8,58],"123":[8,26,8,48],"129":[8,26,8,58],"137":[8,26,8,58],"145":[9,6,9,19],"153":[9,27,9,44],"161":[9,6,9,44],"169":[9,6,9,45],"177":[10,6,10,19],"185":[10,26,10,43],"193":[10,46,10,60],"201":[10,6,10,60],"209":[10,6,10,61],"217":[11,7,11,15],"225":[11,37,11,43],"233":[11,7,11,44],"235":[11,7,11,36],"241":[11,45,11,46],"249":[11,7,11,47],"257":[12,6,12,14],"265":[12,36,12,42],"273":[12,6,12,43],"275":[12,6,12,35],"281":[12,44,12,45],"289":[12,6,12,46],"297":[12,60,12,73],"305":[11,6,12,74],"307":[11,6,12,59],"313":[11,6,12,75],"321":[7,6,13,6],"329":[7,6,13,6],"337":[7,6,13,6],"345":[7,6,13,6],"353":[7,5,13,9],"361":[7,5,13,10],"369":[1,1,14,4],"377":[1,1,14,4],"385":[1,1,14,4],"393":[1,1,14,4],"401":[1,1,14,4],"409":[7,6,13,6],"417":[7,6,13,6],"425":[1,1,14,4],"433":[1,1,14,4],"nBranches":2,"originalCodeFileName":"1697ce2f43f3433874fcc48a07bd817e.js","instrumentedCodeFileName":"1697ce2f43f3433874fcc48a07bd817e_jalangi_.js","code":"\n\t\t\t\tvar vanilla_forum_url = 'http://forums.mmorpg.com/';\n\t\t\t\tvar vanilla_comments_none = 'No Comments';\n\t\t\t\tvar vanilla_comments_singular = '1 Comment';\n\t\t\t\tvar vanilla_comments_plural = '[num] Comments';\n\n\t\t\t\t(function() {\n\t\t\t\t\tvar vanilla_count = document.createElement('script');\n\t\t\t\t\tvanilla_count.type = 'text/javascript';\n\t\t\t\t\tvanilla_count.src = vanilla_forum_url + '/js/count.js';\n\t\t\t\t\t(document.getElementsByTagName('head')[0] ||\n\t\t\t\t\tdocument.getElementsByTagName('body')[0]).appendChild(vanilla_count);\n\t\t\t\t})();\n\t\t\t"};
jalangiLabel44:
    while (true) {
        try {
            J$.Se(369, '1697ce2f43f3433874fcc48a07bd817e_jalangi_.js', '1697ce2f43f3433874fcc48a07bd817e.js');
            J$.N(377, 'vanilla_forum_url', vanilla_forum_url, 0);
            J$.N(385, 'vanilla_comments_none', vanilla_comments_none, 0);
            J$.N(393, 'vanilla_comments_singular', vanilla_comments_singular, 0);
            J$.N(401, 'vanilla_comments_plural', vanilla_comments_plural, 0);
            var vanilla_forum_url = J$.X1(25, J$.W(17, 'vanilla_forum_url', J$.T(9, 'http://forums.mmorpg.com/', 21, false), vanilla_forum_url, 3));
            var vanilla_comments_none = J$.X1(49, J$.W(41, 'vanilla_comments_none', J$.T(33, 'No Comments', 21, false), vanilla_comments_none, 3));
            var vanilla_comments_singular = J$.X1(73, J$.W(65, 'vanilla_comments_singular', J$.T(57, '1 Comment', 21, false), vanilla_comments_singular, 3));
            var vanilla_comments_plural = J$.X1(97, J$.W(89, 'vanilla_comments_plural', J$.T(81, '[num] Comments', 21, false), vanilla_comments_plural, 3));
            J$.X1(361, J$.F(353, J$.T(345, function () {
                jalangiLabel43:
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
                                continue jalangiLabel43;
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
                continue jalangiLabel44;
            } else {
                J$.L();
                break jalangiLabel44;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
