var GAME_LEVELS = [
  ["                                                                                ",
   "                                       f                   f                    ",
   "                                                                            f   ",
   "              -                                                                 ",
   "                                  f                                o            ",
   "                                               f                                ",
   "              f                                                   xxx           ",
   "                                                   xx      xx    xxxxx          ",
   "       f                                     xx                  xxxxx          ",
   "                      f                                           xxx           ",
   "                                                                   -    f       ",
   "                                                                                ",
   "                       x    x    x    x    o    f       -                       ",
   "                                                                                ",
   "              f       e           f      xxxxx            e      f   e          ",
   "                  xxxx                   x   x               o                  ",
   "     @   o        x  x                   x   x                                  ",
   "xxxxxxxxxxxxxxxxxxxxxx                   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                                                "],
  ["                 o                    x!!x                           x                                            ",
   "                                      x!!x                           x                                            ",
   "          xxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!xxxxxxxxxxxxxxx          o  x                                            ",
   "          x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x             x                                            ",
   "          x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x        xxxxxxxxxxx                                       ",
   "          xxxxxxxxxxxxxxvxxxxxxxxxxxxxxxxvxvxxxxxx!!!!!x         v      v                            f            ",
   "                                                 x!!!!!x             o                    x                       ",
   "   f                                             xxvvvvx                           f                              ",
   "                                                             xx   xxxxxxx   xx               o                    ",
   "                     f                        f               xx           xx                     f               ",
   "                                                               xx !!!!!!!vx      x   -                           ",
   "                                                                 xxvxvxxxx                  xxx                   ",
   "                                      f                                                      x                    ",
   "                                               o                                             x    x          f    ",
   "      f                                              f            f         e      xxxxxx    x                    ",
   "                                  o                         o                      x         x                    ",
   "                    e                        xxxxx                           f     x         x       x            ",
   "                              xxxxxxxxx        x                                   x         x               o    ",
   "              xxxxxxxxx         x   x          x           xxxxxxxxxxxxxxxxxxxxxxxxx         x     f              ",
   "         o        x             x   x          x       f      x      x   x   x     x         x          x         ",
   " xx @   xx        x             x   x          x              x      x   x   x     x         x            xxxxxxxx",
   "!!!xxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                    f                                                         ",
   "                                                                                               f              ",
   "                   f                                                                                          ",
   "                                                               f                          o                   ",
   "                                                                                                              ",
   "                    o  o              f                                         f        xx                   ",
   "       f                                                                                 ||                   ",
   "                   xxxxxxx                                                o                         f        ",
   "                   x     x                                 x      -              xxxx                         ",
   "                   x     x                       x                                              o             ",
   "                   x     x=                    f                xxxxxx                                        ",
   "                   x     x                                      x    x                         xxxx           ",
   "            f      x     x                            x         x    x e                                      ",
   "                   x     x       f                =             x    x             o    f                     ",
   "                   x     x                    x                 x    x                                        ",
   "                   x     x                                f     x    x           xxxx                         ",
   "                   x     x      o                   x           x    x                                        ",
   "   f               x     x                                      x    x                                        ",
   "                   x     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx    x     f                   xxxx           ",
   "                   x                                                 x                                        ",
   "                   x     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                     f                  ",
   "                   x     x     |             |       ||           -                                           ",
   "         e         xxxxxxx                    |    f                             xxxx                         ",
   "                                  f                                                                           ",
   "               f          o                                                                                   ",
   "                                      |                       f                          o     xxxx           ",
   "                         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                    f                               ",
   "       f                 x                               x                                          f         ",
   "                         x    xxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                    ",
   "                         x    x          f |                                     xxxx                         ",
   "                    xxxxxx    x   o                      o                                                    ",
   "                    x         x                       f                                   f                   ",
   "        @     o     x         x                                                                               ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   xxxxx   xxxxxxxxxxxxxxxxxxxx  x  xxxxxxxxxxx          xxxx           ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["x                                                                                        x                     ",
   "x                                                                                        x                     ",
   "x                                                                                        x                     ",
   "x                                                                                        x                     ",
   "x      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxvxxxxxxxxxxxxxxxxxxxxxxxxxvxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "x      x                                                        ||                                             ",
   "x      x                                                                                                       ",
   "x      x                                                                                                 -     ",
   "x      x                                                                                                       ",
   "x      x                                                                                                -      ",
   "x      x                                         xx xxx                   xxx xxxx       xxxxxx                ",
   "x      x                  x         xxxxx          x         xxxxxxxx        x                         -       ",
   "x      x       @          x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "x      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "x                                                                                                             x",
   "x                                                                                                             x",
   "x                                                                                                             x",
   "x                                                                                                             x",
   "x              f     f    ffffff    f    f         f     f    f    ff    f    ff  ff                          x",
   "x               f   f     f    f    f    f         f     f    f    f f   f    ff  ff                          x",
   "x                 f       f    f    f    f         f  f  f    f    f  f  f    ff  ff              o           x",
   "x                 f       f    f    f    f         fff fff    f    f   f f                                    x",
   "x                 f       ffffff     ffff          f     f    f    f    ff    ff  ff           xxxxxxx        x",
   "x                                                                                              x     x        x",
   "x                 o          o         o              o       o       o        o   o           x     x        x",
   "x                                                                                              x     x        x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                               ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
