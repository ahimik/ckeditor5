/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import StrikeThrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Link from '@ckeditor/ckeditor5-link/src/link';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import {Paragraph} from '@ckeditor/ckeditor5-paragraph';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Paragraph,
	Bold,
	Italic,
	Underline,
	StrikeThrough,
	Alignment,
	Link,
	PasteFromOffice,
	TextTransformation,
];


// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'strikethrough',
			'underline',
			'|',
			'alignment',
			'|',
			'link'
		]
	},
	link: {
		decorators: {
			openInNewTab: {
				mode: 'manual',
				label: 'Open in a new tab',
				attributes: {
					target: '_blank',
					rel: 'noopener noreferrer'
				}
			}
		}
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
