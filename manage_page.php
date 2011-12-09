<?php
/*
 * This file is part of kusaba.
 *
 * kusaba is free software; you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 2 of the License, or (at your option) any later
 * version.
 *
 * kusaba is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * kusaba; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */
/** 
 * Manage panel for administrative/moderator operations
 *
 * The manage panel is used for changing configurations, adding/modifying/deleting
 * boards, locking/stickying/deleting posts, banning users, and more.  The manage
 * panel is able to be logged in to by both administrators and moderators, however
 * moderators will be restricted to only the boards which they moderate, and cannot
 * perform any actions on the "Administration:" link-line.
 * 
 * @package kusaba  
 */

session_set_cookie_params(60 * 60 * 24 * 100); /* 100 Days */
session_start();

require 'config.php';
require KU_ROOTDIR.'lib/smarty.php';
require KU_ROOTDIR . 'inc/functions.php';
require KU_ROOTDIR . 'inc/classes/manage.class.php';
require KU_ROOTDIR . 'inc/classes/board-post.class.php';
require KU_ROOTDIR . 'inc/classes/bans.class.php';

$smarty->assign('lang_manageboards', _gettext('Manage boards'));

$manage_class = new Manage();
$bans_class = new Bans();

/* Do these tasks each time manage.php is loaded */
/* Doesn't matter if this is run by a non-mod */
$bans_class->RemoveExpiredBans();
/* Does nothing if the user isn't logged in */
$manage_class->SetModerationCookies();
  
/* Decide what needs to be done */
$action = isset($_REQUEST['action']) ? $_REQUEST['action'] : 'posting_rates';
switch ($action) {
    case 'logout':
        $manage_class->Logout();
        break;
    case 'showlogin':
        $manage_class->LoginForm();
        break;
    case 'login':
        $manage_class->CheckLogin();
        /* Halts execution if not validated */
        $manage_class->ValidateSession();
        manage_page();
        break;
    default:
        /* Halts execution if not validated */
        $manage_class->ValidateSession();
        manage_page($action);
        break;
}
  
/* Show a particular manage function */
function manage_page($action = 'posting_rates') {
    global $manage_class, $tpl_page;
    
    $manage_class->Header();
    
    if (is_callable(array($manage_class, $action))) {
        $manage_class->$action();
    } else {
        $tpl_page .= sprintf(_gettext('%s not implemented.'), $action);
    }
    
    $manage_class->Footer();
}

/* Check if a tab is currently open */
function pagetaken_check($pagename) {
    global $action;
    
    $tab_is_selected = false;
    $pages = array('home', 'administration', 'boards', 'moderation');
    foreach ($pages as $page) {
        if (isset($_GET[$page])) {
            $tab_is_selected = true;
        }
    }
    if ($tab_is_selected && isset($_GET[$pagename])) {
        return true;
    } else {
        /* Special workaround for index page */
        if ($pagename == 'home' && ($action == 'posting_rates' || $action == '') && !$tab_is_selected) {
            return true;
        } else {
            return false;
        }
    }
}

?>
