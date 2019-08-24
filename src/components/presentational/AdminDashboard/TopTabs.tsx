import * as React from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router';

type Tab = {
    title: string;
    path: string;
}

const sessionTabs = [
    {
        title: 'Book Sessions',
        path: '/admin/sessions'
    },
    {
        title: 'Admin Sessions',
        path: '/admin/sessions/adminSessions'
    },
    {
        title: 'No-show list',
        path: '/admin/sessions/noShow'
    }
];
    

const TopTabs:React.FunctionComponent = () => {
    const [state, setState] = React.useState({
        path: '',
        doRedirect: false
    });

    const handleClick = (index: number) => (event: any) => {
        setState({
            path: sessionTabs[index].path,
            doRedirect: true
        })
    }
    console.log(window.location.pathname);
    return (
        <div style={{display: 'flex', flexFlow: 'row nowrap'}}>
            {sessionTabs.map((tab: Tab, index: number) => {
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