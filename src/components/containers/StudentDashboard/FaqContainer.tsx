import React from 'react';
import { Typography } from '@material-ui/core';
import UserContext from '../../../UserContext';

interface faqContainerProps {}

const FaqContainer:React.FunctionComponent<faqContainerProps> = () => {
    return (
        <div style={{ margin: '0 3%' }}>
            <Typography variant="body1">
            </Typography>
            <Typography variant="h3">
                About the HELPS programs
            </Typography>
            <Typography variant="body1">
                <h4 >Who can use HELPS?</h4>
                <ul>Any student enrolled in any faculty at UTS</ul>

                <h4>Where is HELPS?</h4>
                <ul>HELPS is located on Building 1, Level 5 , room 25</ul>
                
                <h4>How much does it cost?</h4>
                <ul>Services are free of tuition fees for non-credit workshops and individual consultations.</ul>
                
                <h4>Can you help me with my assignment?</h4>
                <ul>Yes. HELPS offers various workshops and individual consultations. For more information, check out our <a href="http://www.ssu.uts.edu.au/helps/index.html">website.</a></ul>
                
                <h4>Can you proofread and correct my assignment?</h4>
                <ul>No. Our role is not to correct grammar or other errors in an assignment. We can help you develop your own editing strategies. You should also use a computer spell-check, find a competent friend and a good dictionary.</ul>
                
                <h4>Can you help me with the content of my assignment?</h4>
                <ul>No. We can’t tell you what to say, we can only help you say it better and more clearly. While we’re happy to act as a sounding board for your ideas, content questions require the specialised disciplinary knowledge of lecturers and tutors in your faculty. You should take specific content questions directly to them.</ul>
                
                <h4>My lecturer says I need to improve my grammar. Can you help me?</h4>
                <ul>Yes. Please check our website for information on our <a href="https://www.uts.edu.au/current-students/support/helps/daily-workshops">workshops</a> and <a href="https://www.uts.edu.au/current-students/support/helps/self-help-resources">Learning resources.</a></ul>
                
                <h4>Can you help me with my pronunciation?</h4>
                <ul> Yes. Please check our website for information on our <a href="https://www.uts.edu.au/current-students/support/helps/english-speaking-practice">English speaking programs</a>, <a href="https://www.uts.edu.au/current-students/support/helps/daily-workshops">workshops</a> and <a href="https://www.uts.edu.au/current-students/support/helps/self-help-resources">Learning resources.</a></ul>
                
                <h4>Can I practise my seminar presentation with someone?</h4>
                <ul>Yes. You can attend our workshops or drop in for an individual consultation session.</ul>
            </Typography>

            <Typography variant="h3">
               About the Special Conditions in Exams
            </Typography>
            <Typography variant="body1">
                <h4 >I am not a native English speaker and I feel that I need more time in exams. Can you help?</h4>
                <ul>Maybe. You might be eligible to apply for Special Conditions in Exams.</ul>

                <h4>I'm a second/third year student. Can I get Special Conditions in my exams?</h4>
                <ul>No. Only first year (1st/2nd semester) students are eligible to apply.</ul>
                
                <h4>What is the deadline to apply for the Special Conditions?</h4>
                <ul>The application closes on the Census date. Click on <a href="https://www.uts.edu.au/current-students/support/helps/special-conditions-exams-students-non-english-speaking-backgrounds">Special Conditions in Exams</a> for more information.</ul>
                
                If you have a question which has not been answered above, please email us: HELPS@uts.edu.au
            </Typography>
        </div>
    );
}

export default FaqContainer;