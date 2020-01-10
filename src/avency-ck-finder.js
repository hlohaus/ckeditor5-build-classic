import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

export default class AvencyCKFinder extends Plugin {
	/**
     * @inheritDoc
     */
	static get pluginName() {
		return 'AvencyCKFinder';
	}

	/**
     * @inheritDoc
     */
	init() {
		const editor = this.editor;
		const componentFactory = editor.ui.componentFactory;
		const t = editor.t;

		componentFactory.add( 'avencyCkFinder', locale => {
			const button = new ButtonView( locale );

			button.set( {
				label: t( 'Insert image' ),
				icon: imageIcon,
				tooltip: true
			} );

			button.on( 'execute', () => {
				this.editor.swComponet.onOpenMediaModal();
			} );

			return button;
		} );
	}
}
