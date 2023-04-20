import { useSelector } from 'react-redux'
import Section from './Section'

const Scheduler = () => {

    const section1Data = useSelector(state => state.schedule.section1Data);
    const section2Data = useSelector(state => state.schedule.section2Data);
    const section3Data = useSelector(state => state.schedule.section3Data);

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Scheduler</h2>
            <table cellSpacing="0">
                <thead>
                    <tr>
                        <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                    </tr>
                </thead>
                <tbody>
                    <Section sectionId="1" sectionData={section1Data} bg="#eeeeee" />
                    <Section sectionId="2" sectionData={section2Data} bg="#dcdcdc" />
                    <Section sectionId="3" sectionData={section3Data} bg="#eeeeee" />
                </tbody>
            </table>
        </div>
    )
}

export default Scheduler