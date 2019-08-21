import * as React from 'react';
import { Button } from '@material-ui/core';

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
    console.log(window.location.pathname);
    return (
        <div style={{display: 'flex', flexFlow: 'row nowrap'}}>
            {sessionTabs.map((tab: Tab, index: number) => {
                return (
                    <Button key={index} variant="contained" href={tab.path}>
                        {tab.title}
                    </Button>    
                )
            })}
        </div>
    );
};

export default TopTabs;