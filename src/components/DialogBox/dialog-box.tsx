import React from 'react'
import DialogBoxView from './dialog-box-view'

const DialogBox = ({ description, handleOkPressButton, showDialogBox }: any) => {
	return (
		<DialogBoxView
			handleOkPressButton={handleOkPressButton}
			visible={showDialogBox}
			description={description}
		/>
	);
}

export default DialogBox;