import * as React from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router';

type Tab = {
    title: string;
    path: string;
}

const reportTabs = [
    {
        title: 'Session Reports',
        path: '/admin/reports'
    },
    {
        title: 'Workshop Reports',
        path: '/admin/reports/workshops'
    }
];
    

const TopTabs:React.FunctionComponent = () => {
    const [state, setState] = React.useState({
        path: '',
        doRedirect: false
    });

    const handleClick = (index: number) => (event: any) => {
        setState({
            path: reportTabs[index].path,
            doRedirect: true
        })
    }
    return (
        <div style={{display: 'flex', flexFlow: 'row nowrap'}}>
            {reportTabs.map((tab: Tab, index: number) => {
                return (
                    <Button key={index} variant="contained" onClick={handleClick(index)}>
                        {tab.title}
                    </Button>    
                )
            })}
            { state.doRedirect ? <Redirect to={state.path} /> : '' }
        </div>
    );
};

export default TopTabs;