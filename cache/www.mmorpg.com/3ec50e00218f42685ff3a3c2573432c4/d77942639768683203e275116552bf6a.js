
                            var vanilla_forum_url = 'http://forums.mmorpg.com/';
                            var vanilla_comments_none = 'No Comments';
                            var vanilla_comments_singular = '1 Comment';
                            var vanilla_comments_plural = '[num] Comments';

                            (function() {
                                var vanilla_count = document.createElement('script');
                                vanilla_count.type = 'text/javascript';
                                vanilla_count.src = vanilla_forum_url + '/js/count.js';
                                (document.getElementsByTagName('head')[0] ||
                                document.getElementsByTagName('body')[0]).appendChild(vanilla_count);
                            })();
                        