import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Redirect } from 'react-router';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

interface CenteredTabsProps {
	workshopTabs: Array<CTab>
	props: any
	callbackTab: any
}

export interface CTab {
	title: string
}

const CenteredTabs: React.SFC<CenteredTabsProps> = ({ workshopTabs, props, callbackTab }) => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
		setValue(newValue);
	}

	function changeTab(tabSelected: string) {
		callbackTab(tabSelected)
	}


	return (
		<Paper className={classes.root}>
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				{workshopTabs.map((tab: CTab) => {
					return (
						<Tab key={tab.title.indexOf(tab.title) + ":" + tab.title}
							label={tab.title}
							onClick={() => changeTab(tab.title)}
						/>
					)
				})
				}
			</Tabs>
		</Paper>
	);
}

export default CenteredTabs;