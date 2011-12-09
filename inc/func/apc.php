<?php
function clearBlotterCache() {
	if (KU_APC) {
		apc_delete('blotter|all');
		apc_delete('blotter|last4');
	}
}

/**
 * Clear cache for the supplied post ID of the supplied board
 * 
 * @param integer $id Post ID
 * @param string $board Board name
 */    
function clearPostCache($id, $board) {
	global $db;
	if (KU_APC) {
		apc_delete('post|' . $board . '|' . $id);
		apc_delete('buildthread|' . $board . '|' . $id . '|page|replies');
	}
	$db->Execute("DELETE FROM `" . KU_DBPREFIX . "reports` WHERE `id` = " . $id . " AND `board` = '" . mysql_real_escape_string($board) . "' LIMIT 1");
}
?>