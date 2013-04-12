/* demo-repository.js is part of Aloha Editor project http://aloha-editor.org
 *
 * Aloha Editor is a WYSIWYG HTML5 inline editing library and editor. 
 * Copyright (c) 2012-2013 Gentics Software GmbH, Vienna, Austria.
 * Contributors http://aloha-editor.org/contribution.php 
 * 
 * Aloha Editor is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or any later version.
 *
 * Aloha Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
 * 
 * As an additional permission to the GNU GPL version 2, you may distribute
 * non-source (e.g., minimized or compacted) forms of the Aloha-Editor
 * source code without the copy of the GNU GPL normally required,
 * provided you include this license notice and a URL through which
 * recipients can access the Corresponding Source.
 */
define([
	'aloha/jquery',
	'aloha/core',
	'aloha/repository',
	'aloha/repositoryobjects' // Provides Aloha.RepositoryFolder and
	                          // Aloha.RepositoryDocument
], function (
	$,
	Aloha,
	AbstractRepository,
	__unused__
) {
	'use strict';

	var REPOSITORY_ID = 'demo-repository';

	var folders = [
		new Aloha.RepositoryFolder({
			id: 'demo-1',
			repositoryId: REPOSITORY_ID,
			parentId: REPOSITORY_ID,
			name: 'Demo 1',
			baseType: 'folder',
			type: 'Foobar'
		})
	];

	var Repository = AbstractRepository.extend({

		_constructor: function () {
			this._super(REPOSITORY_ID);
		},

		init: function () {
		    this.repositoryName = 'Demo Repository';
		},

		query: function (param, callback) {
			callback({});
		},

		getChildren: function (param, callback) {
			callback(folders);
		},

		getObjectById: function (id, callback) {
			callback({});
		}

	});

	return new Repository();
});
