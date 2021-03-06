"use strict";
function hexToHSL(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result !== null) {
        var r = parseInt(result[1], 16);
        var g = parseInt(result[2], 16);
        var b = parseInt(result[3], 16);
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        if (max == min) {
            h = s = 0; // achromatic
        }
        else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            if (h) {
                h /= 6;
            }
        }
        if (h || s || l !== undefined) {
            var HSL = new Object;
            HSL['h'] = h;
            HSL['s'] = s;
            HSL['l'] = l;
            return HSL;
        }
    }
}
var jsonTemplate = {
    "name": "Dimmed Cold",
    "type": "dark",
    "colors": {
        // BASE COLORS
        "focusBorder": "#161820",
        "foreground": "#c6c8d0",
        "widget.shadow": "#000000",
        "selection.background": "#c6c8d062",
        "errorForeground": "#fb4934",
        // BUTTON
        "button.background": "#c6c8d03d",
        "button.foreground": "#c6c8d0",
        "button.hoverBackground": "#c6c8d060",
        // DROPDOWN
        "dropdown.background": "#161820",
        "dropdown.border": "#242A30",
        "dropdown.foreground": "#c6c8d0",
        // INPUT
        "input.background": "#161820",
        "input.border": "#242A30",
        "input.foreground": "#c6c8d0",
        "input.placeholderForeground": "#c6c8d060",
        "inputValidation.errorBorder": "#fb4934",
        "inputValidation.errorBackground": "#f4433680",
        "inputValidation.infoBorder": "#00e676",
        "inputValidation.infoBackground": "#2196f380",
        "inputValidation.warningBorder": "#fabd2f",
        "inputValidation.warningBackground": "#ff6f00",
        // SCROLL BAR
        "scrollbar.shadow": "#161820",
        "scrollbarSlider.activeBackground": "#c6c8d07c",
        "scrollbarSlider.hoverBackground": "#c6c8d04d",
        "scrollbarSlider.background": "#c6c8d023",
        // BADGE
        "badge.background": "#c6c8d0",
        "badge.foreground": "#161820",
        // PROGRESS BAR
        "progressBar.background": "#00e676",
        // LISTS AND TREES
        "list.activeSelectionBackground": "#2B333A",
        "list.activeSelectionForeground": "#c6c8d0",
        "list.hoverBackground": "#252D33",
        "list.hoverForeground": "#c6c8d0",
        "list.focusBackground": "#384149",
        "list.focusForeground": "#c6c8d0",
        "list.inactiveSelectionForeground": "#c6c8d0",
        "list.inactiveSelectionBackground": "#2B333A",
        "list.dropBackground": "#252D33",
        "list.highlightForeground": "#A2AFBC",
        // BREADCRUMB NAVIGATION
        "breadcrumb.foreground": "#A2AFBC",
        "breadcrumb.focusForeground": "#c6c8d0",
        "breadcrumb.activeSelectionForeground": "#c6c8d0",
        // SIDE BAR
        "sideBar.background": "#161820",
        "sideBar.foreground": "#c6c8d0",
        "sideBar.border": "#161820",
        "sideBarTitle.foreground": "#c6c8d0",
        "sideBarSectionHeader.background": "#161820",
        "sideBarSectionHeader.foreground": "#c6c8d0",
        // ACTIVITY BAR
        "activityBar.background": "#161820",
        "activityBar.dropBackground": "#161820",
        "activityBar.foreground": "#c6c8d0",
        "activityBar.border": "#161820",
        "activityBarBadge.background": "#c6c8d0",
        "activityBarBadge.foreground": "#161820",
        // EDITOR GROUPS
        //  "editorGroup.background": "#161820",
        "editorGroup.border": "#161820",
        "editorGroup.dropBackground": "#3c383660",
        "editorGroupHeader.noTabsBackground": "#3c3836",
        "editorGroupHeader.tabsBackground": "#161820",
        "editorGroupHeader.tabsBorder": "#161820",
        // TABS
        "tab.border": "#161820",
        "tab.activeBorder": "#161820",
        "tab.activeBackground": "#161820",
        "tab.activeForeground": "#c6c8d0",
        "tab.inactiveForeground": "#89a0c3",
        "tab.inactiveBackground": "#161820",
        "tab.unfocusedActiveForeground": "#89a0c3",
        "tab.unfocusedActiveBorder": "#161820",
        "tab.unfocusedInactiveForeground": "#4A5D70",
        // EDITOR
        "editor.background": "#161820",
        "editor.foreground": "#CED3DB",
        "editorLineNumber.foreground": "#38414980",
        "editorCursor.foreground": "#c6c8d0",
        "editor.selectionBackground": "#313A4270",
        "editor.selectionHighlightBackground": "#fabd2f40",
        "editor.hoverHighlightBackground": "#00e67721",
        "editorLink.activeForeground": "#c6c8d0",
        "editor.findMatchBackground": "#38414980",
        "editor.findMatchHighlightBackground": "#2F2E42",
        "editor.findRangeHighlightBackground": "#38414980",
        "editor.lineHighlightBackground": "#1e2131",
        "editor.lineHighlightBorder": "#1e2131",
        "editorWhitespace.foreground": "#313A42",
        "editorIndentGuide.background": "#2B333A",
        "editorIndentGuide.activeBackground": "#3E4851",
        "editorRuler.foreground": "#384149",
        "editorCodeLens.foreground": "#a8998490",
        "editorBracketMatch.border": "#16182000",
        "editorBracketMatch.background": "#92837480",
        "editorHoverWidget.background": "#2B333A",
        "editorHoverWidget.border": "#2B333A",
        "editorOverviewRuler.border": "#16182000",
        "editorOverviewRuler.findMatchForeground": "#bdae93",
        "editorOverviewRuler.rangeHighlightForeground": "#bdae93",
        "editorOverviewRuler.selectionHighlightForeground": "#665c54",
        "editorOverviewRuler.wordHighlightForeground": "#665c54",
        "editorOverviewRuler.wordHighlightStrongForeground": "#665c54",
        "editorOverviewRuler.modifiedForeground": "#00e676",
        "editorOverviewRuler.addedForeground": "#00e676",
        "editorOverviewRuler.deletedForeground": "#00e676",
        "editorOverviewRuler.errorForeground": "#fb4934",
        "editorOverviewRuler.warningForeground": "#ffde03",
        "editorOverviewRuler.infoForeground": "#d3869b",
        "editorGutter.background": "#16182000",
        "editorGutter.modifiedBackground": "#00e676",
        "editorGutter.addedBackground": "#b8bb26",
        "editorGutter.deletedBackground": "#fb4934",
        "editorError.foreground": "#f44336",
        "editorWarning.foreground": "#ffde03",
        "editorInfo.foreground": "#2196f3",
        // DIFF EDITOR
        "diffEditor.insertedTextBackground": "#00e67630",
        "diffEditor.insertedTextBorder": "#00e67600",
        "diffEditor.removedTextBackground": "#f4433630",
        "diffEditor.removedTextBorder": "#f4433600",
        // WIDGET
        "editorWidget.background": "#2B333A",
        "editorWidget.border": "#2B333A",
        "editorSuggestWidget.background": "#2B333A",
        "editorSuggestWidget.foreground": "#c6c8d0",
        "editorSuggestWidget.highlightForeground": "#00e676",
        "editorSuggestWidget.selectedBackground": "#3c383660",
        "editorSuggestWidget.border": "#3c3836",
        // PEEK VIEW
        "peekView.border": "#3c3836",
        "peekViewEditor.background": "#3c383650",
        "peekViewEditorGutter.background": "#3c383650",
        "peekViewEditor.matchHighlightBackground": "",
        "peekViewResult.background": "#3c383650",
        "peekViewResult.fileForeground": "#c6c8d0",
        "peekViewResult.matchHighlightBackground": "#8ec07c30",
        "peekViewResult.selectionBackground": "#8ec07c30",
        "peekViewResult.selectionForeground": "#8ec07c30",
        "peekViewTitle.background": "#3c383650",
        "peekViewTitleDescription.foreground": "#c6c8d0",
        "peekViewTitleLabel.foreground": "#c6c8d0",
        // MERGE CONFLICTS
        "merge.currentHeaderBackground": "#2196f340",
        "merge.currentContentBackground": "#2196f320",
        "merge.incomingHeaderBackground": "#00e67640",
        "merge.incomingContentBackground": "#00e67620",
        "merge.border": "#16182000",
        "editorOverviewRuler.currentContentForeground": "#2196f3",
        "editorOverviewRuler.incomingContentForeground": "#00e676",
        "editorOverviewRuler.commonContentForeground": "#c6c8d0",
        // PANELS
        "panel.border": "#161820",
        "panelTitle.activeForeground": "#c6c8d0",
        // STATUS BAR
        "statusBar.background": "#161820",
        "statusBar.border": "#161820",
        "statusBar.foreground": "#A2AFBC",
        "statusBar.debuggingBackground": "#ffab00",
        "statusBar.debuggingForeground": "#161820",
        "statusBar.debuggingBorder": "#16182000",
        "statusBar.noFolderBackground": "#161820",
        "statusBar.noFolderBorder": "#16182000",
        // INTEGRATED TERMINAL
        "terminal.ansiBlack": "#3c3836",
        "terminal.ansiBrightBlack": "#928374",
        "terminal.ansiRed": "#f44336",
        "terminal.ansiBrightRed": "#fb4934",
        "terminal.ansiGreen": "#98971a",
        "terminal.ansiBrightGreen": "#b8bb26",
        "terminal.ansiYellow": "#ffde03",
        "terminal.ansiBrightYellow": "#fabd2f",
        "terminal.ansiBlue": "#2196f3",
        "terminal.ansiBrightBlue": "#00e676",
        "terminal.ansiMagenta": "#ff0266",
        "terminal.ansiBrightMagenta": "#df6495",
        "terminal.ansiCyan": "#00e676",
        "terminal.ansiBrightCyan": "#8ec07c",
        "terminal.ansiWhite": "#a89984",
        "terminal.ansiBrightWhite": "#c6c8d0",
        "terminal.foreground": "#c6c8d0",
        "terminal.background": "#161820",
        // TITLE BAR macOS (not tested)
        "titleBar.activeBackground": "#161820",
        "titleBar.activeForeground": "#c6c8d0",
        "titleBar.inactiveBackground": "#161820",
        // GIT COLORS
        "gitDecoration.modifiedResourceForeground": "#00e676",
        "gitDecoration.deletedResourceForeground": "#f44336",
        "gitDecoration.untrackedResourceForeground": "#ffde03",
        "gitDecoration.ignoredResourceForeground": "#89a0c3",
        "gitDecoration.conflictingResourceForeground": "#ff0266",
        // NOTIFICATION
        "notification.background": "#161820",
        "notification.foreground": "#c6c8d0",
        "notification.buttonBackground": "#665c54",
        "notification.buttonHoverBackground": "#665c5450",
        "notification.buttonForeground": "#c6c8d0",
        "notification.infoBackground": "#00e676",
        "notification.infoForeground": "#161820",
        "notification.warningBackground": "#fabd2f",
        "notification.warningForeground": "#161820",
        "notification.errorBackground": "#fb4934",
        "notification.errorForeground": "#161820",
        // EXTENSIONS
        "extensionButton.prominentBackground": "#b8bb2680",
        "extensionButton.prominentHoverBackground": "#b8bb2630",
        // OTHERS
        "textLink.foreground": "#c6c8d0dd",
        "textLink.activeForeground": "#c6c8d0",
        "debugToolBar.background": "#161820"
    },
    "tokenColors": [
        {
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "emphasis",
            "settings": {
                "fontStyle": "italic"
            }
        },
        {
            "scope": "strong",
            "settings": {
                "fontStyle": "bold"
            }
        },
        {
            "scope": "header",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": [
                "comment",
                "punctuation.definition.comment"
            ],
            "settings": {
                "foreground": "#505D68"
            }
        },
        {
            "scope": [
                "punctuation.definition.string.template"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": [
                "punctuation.definition.string.begin",
                "punctuation.definition.string.end"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": [
                "constant",
                "support.constant",
                "variable.arguments"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": [
                "constant.language.boolean"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "constant.character.entity",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "constant.rgb-value",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "entity.name.selector",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "entity.other.attribute-name",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "entity.other.inherited-class",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": [
                "entity.name.tag",
                "punctuation.tag",
                "invalid.illegal.bad-ampersand"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": [
                "invalid",
                "invalid.illegal"
            ],
            "settings": {
                "foreground": "#f44336"
            }
        },
        {
            "scope": "invalid.deprecated",
            "settings": {
                "foreground": "#ff0266"
            }
        },
        {
            "scope": "meta.selector",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "meta.preprocessor",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "meta.preprocessor.string",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "meta.preprocessor.numeric",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "meta.header.diff",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "meta.section.attributes.plain",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "storage",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "storage.modifier",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "string",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "string.quoted.double",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "string.tag",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "string.value",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "string.regexp",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "string.escape",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "string.quasi",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "string.entity",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "object",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "module.node",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "support.type.property-name",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "keyword",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "keyword.control",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": ["keyword.control.try",
                "keyword.control.catch",
                "keyword.control.trycatch"],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": [
                "keyword.control.conditional",
                "keyword.control.loop"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "keyword.control.module",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "keyword.control.less",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": [
                "keyword.operator",
                "keyword.operator.new"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": [
                "keyword.operator.punctuation",
                "keyword.operator.navigation"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "keyword.other.unit",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "metatag.php",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "support.function.git-rebase",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "constant.sha.git-rebase",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "name": "Types declaration and references",
            "scope": [
                "meta.type.name",
                "meta.return.type",
                "meta.return-type",
                "meta.cast",
                "support.type",
                "storage.type.cs",
                "variable.class"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": [
                "variable.this",
                "support.variable"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": [
                "entity.static",
                "entity.name.class.static.function",
                "entity.name.function",
                "entity.name.class",
                "entity.name.type.class"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": [
                "meta.type.annotation",
                "meta.type.parameters"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "name": "Function declarations",
            "scope": [
                "storage.type.function",
                "entity.function",
                "entity.name.function.static",
                "meta.delimiter"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "entity.name.function.function-call",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "support.function.builtin",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": [
                "entity.name.method",
                "entity.name.method.function-call",
                "entity.name.static.function-call"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "brace, meta.brace.round, meta.brace.square, meta.brace.curly",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "name": "variables",
            "scope": [
                "meta.parameter.type.variable",
                "variable.parameter",
                "variable.name",
                "variable.other",
                "variable",
                "string.constant.other.placeholder"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "prototype",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "storage.type.class",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": [
                "punctuation"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "punctuation.quoted",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "punctuation.quasi",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": [
                "punctuation.accessor",
                "keyword.operator.accessor"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "name": "URL",
            "scope": [
                "*url*",
                "*link*",
                "*uri*"
            ],
            "settings": {
                "fontStyle": "underline"
            }
        },
        // ----------------------------------------
        //            LANGUAGE SPECIFIC
        // ----------------------------------------
        // HAML------------------------------------------
        {
            "name": "HAML text",
            "scope": [
                "text.haml"
            ],
            "settings": {
                "foreground": "##89a0c3"
            }
        },
        // PYTHON ----------------------------------------
        {
            "name": "Python function",
            "scope": [
                "meta.function.python",
                "entity.name.function.python"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "name": "Python Function and Class definition keywords",
            "scope": [
                "storage.type.function.python",
                "storage.modifier.declaration",
                "storage.type.class.python"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "name": "Python Function Call",
            "scope": "meta.function-call.generic",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "name": "Python Function Arguments",
            "scope": "meta.function-call.arguments",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "name": "Python Function decorator",
            "scope": "entity.name.function.decorator",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "name": "Python ALL CAPS",
            "scope": "constant.other.caps",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        // SHELL ----------------------------------------
        {
            "scope": "keyword.operator.logical",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "punctuation.definition.logical-expression",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "string.inperpolated.dollar.shell",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": [
                "string.interpolated.dollar.shell",
                "string.interpolated.backtick.shell"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        // C C++ ----------------------------------------
        {
            "scope": "keyword.control.directive",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": [
                "support.function.C99 ",
                "keyword.control.c"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        // MAKEFILE ----------------------------------------
        {
            "scope": "meta.scope.prerequisites",
            "settings": {
                "foreground": "#fabd2f"
            }
        },
        {
            "scope": "entity.name.function.target",
            "settings": {
                "foreground": "#b8bb26",
                "fontStyle": "bold"
            }
        },
        // JAVA ----------------------------------------
        {
            "name": "coloring of the Java import and package identifiers",
            "scope": [
                "storage.modifier.import.java",
                "storage.modifier.package.java"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": [
                "keyword.other.import.java",
                "keyword.other.package.java"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "storage.type.java",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "storage.type.annotation",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "keyword.other.documentation.javadoc",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "comment.block.javadoc variable.parameter.java",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": [
                "source.java variable.other.object",
                "source.java variable.other.definition.java"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": [
                "punctuation.separator.period"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        // LISP ----------------------------------------
        {
            "name": "Lisp optional function parameters",
            "scope": "meta.function-parameters.lisp",
            "settings": {
                "foreground": "#fabd2f"
            }
        },
        // MARKUP ----------------------------------------
        {
            "scope": "markup.underline",
            "settings": {
                "fontStyle": "underline"
            }
        },
        {
            "scope": "string.other.link.title.markdown",
            "settings": {
                "foreground": "#c6c8d0",
                "fontStyle": "underline"
            }
        },
        {
            "scope": "markup.underline.link",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "markup.bold",
            "settings": {
                "fontStyle": "bold",
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "markup.heading",
            "settings": {
                "fontStyle": "bold",
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "markup.italic",
            "settings": {
                "fontStyle": "italic"
            }
        },
        {
            "scope": "markup.inserted",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "markup.deleted",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "markup.changed",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "markup.punctuation.quote.beginning",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": "markup.punctuation.list.beginning",
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": [
                "markup.inline.raw",
                "markup.fenced_code.block"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        // JSON ----------------------------------------
        {
            "scope": "string.quoted.double.json",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "name": "JSON Level 0",
            "scope": [
                "source.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "name": "JSON Level 1",
            "scope": [
                "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "name": "JSON Level 2",
            "scope": [
                "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "name": "JSON Level 3",
            "scope": [
                "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        // CSS ----------------------------------------
        {
            "scope": "entity.other.attribute-name.css",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "source.css meta.selector",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": "support.type.property-name.css",
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": ["entity.other.attribute-name.class",
                "punctuation.definition.entity"],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": [
                "source.css support.function.transform",
                "source.css support.function.timing-function",
                "source.css support.function.misc"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "name": "CSS property value",
            "scope": [
                "support.property-value",
                "constant.rgb-value",
                "support.property-value.scss",
                "constant.rgb-value.scss"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": [
                "entity.name.tag.css"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        // HTML / XML ----------------------------------------
        {
            "scope": [
                "punctuation.definition.tag",
                "cast.expr"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": [
                "text.html entity.name.tag",
                "text.html punctuation.tag"
            ],
            "settings": {
                "foreground": "#89a0c3",
            }
        },
        // javascript ---------------------------------------
        {
            "scope": [
                "source.js variable.language"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": [
                "support.type.object"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        // typescript ---------------------------------------
        {
            "scope": [
                "source.ts variable.language"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        // golang --------------------------------------------
        {
            "scope": [
                "source.go storage.type"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": [
                "source.go entity.name.import"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": [
                "punctuation.other.period"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": [
                "source.go keyword.package",
                "source.go keyword.import"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": [
                "source.go keyword.interface",
                "source.go keyword.struct"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "scope": [
                "source.go entity.name.type"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "scope": [
                "source.go entity.name.function"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        // cucumber
        {
            "scope": [
                "keyword.control.cucumber.table"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        // REASONML ------------------------------------
        {
            "name": "ReasonML String",
            "scope": [
                "source.reason string.double",
                "source.reason string.regexp"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "name": "ReasonML equals sign",
            "scope": [
                "source.reason keyword.control.less"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "name": "ReasonML variable",
            "scope": [
                "source.reason entity.name.function"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "name": "ReasonML property",
            "scope": [
                "source.reason support.property-value",
                "source.reason entity.name.filename"
            ],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        // POWERSHELL ------------------------------------
        {
            "name": "Powershell member",
            "scope": ["source.powershell variable.other.member.powershell"],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "name": "Powershell function",
            "scope": ["source.powershell support.function.powershell"],
            "settings": {
                "foreground": "#89a0c3"
            }
        },
        {
            "name": "Powershell keyword control",
            "scope": ["keyword.control.powershell"],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "name": "Powershell function attribute",
            "scope": ["source.powershell support.function.attribute.powershell"],
            "settings": {
                "foreground": "#c6c8d0"
            }
        },
        {
            "name": "Powershell hashtable member",
            "scope": [
                "source.powershell meta.hashtable.assignment.powershell variable.other.readwrite.powershell"
            ],
            "settings": {
                "foreground": "#89a0c3"
            }
        }
    ]
};
console.log(hexToHSL('#000000'));
