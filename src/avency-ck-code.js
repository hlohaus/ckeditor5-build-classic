import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import imageIcon from './code.svg';

export default class AvencyCKCode extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'AvencyCKCode';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const componentFactory = editor.ui.componentFactory;
		const t = editor.t;

		componentFactory.add( 'avencyCkCode', locale => {
			const button = new ButtonView( locale );

			button.set( {
				label: t( 'Show code' ),
				icon: imageIcon,
				tooltip: true
			} );

			button.on( 'execute', () => {
				const sw = this.editor.swComponet;
				sw.isCodeEdit = !sw.isCodeEdit;
			} );

			return button;
		} );
	}
}
