# FiveWeb makefile

all : ./lib/fiveweb.lib

PRG_OBJS = obj/fiveweb.obj \
	obj/browse.obj \
	obj/button.obj \
	obj/control.obj \
	obj/datepick.obj \
	obj/dialog.obj \
	obj/errsys.obj \
	obj/folder.obj \
	obj/harbour.obj \
	obj/menu.obj \
	obj/menuitem.obj \
	obj/pdmenu.obj \
	obj/radio.obj \
	obj/valblank.obj

./lib/fiveweb.lib : $(PRG_OBJS)

obj/%.obj : obj/%.c
	gcc -c -I./../harbour/include -o$@ $<
	ar rc ./lib/libfiveweb.a $@

obj/%.c : ./source/function/%.prg
	./../harbour/bin/harbour $< -o./$@ -n -I./../harbour/include -I./include

obj/%.c : ./source/classes/%.prg
	./../harbour/bin/harbour $< -o./$@ -n -I./../harbour/include -I./include