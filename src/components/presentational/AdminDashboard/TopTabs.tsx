import * as React from 'react';
import { Button } from '@material-ui/core';

type Tab = {
    title: string;
    path: string;
}

const sessionTabs = [
    {
        title: 'Book Sessions',
        path: '/bookSessions'
    },
    {
        title: 'Admin Sessions',
        path: '/adminSessions'
    },
    {
        title: 'No-show list',
        path: '/noShow'
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