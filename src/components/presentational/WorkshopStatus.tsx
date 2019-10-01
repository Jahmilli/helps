import React from 'react';
import { Button } from '@material-ui/core';

interface WorkshopStatusProps {
	workshopTabs: Array<string>
	callbackTab: any
}

const WorkshopStatus: React.SFC<WorkshopStatusProps> = ({ workshopTabs, callbackTab }) => {
	function changeTab(tabSelected: string) {
		callbackTab(tabSelected)
	}

	return (
		<div>
			{workshopTabs.map((tab: string) => {
				return (
					<Button key={tab.indexOf(tab) + ":" + tab}
						onClick={() => changeTab(tab)}
						variant="contained"
					>
						{tab}
					</Button>
				)
			})
			}
		</div>
	);
}

export default WorkshopStatus;