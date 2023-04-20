import { useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";

const StaffSection = () => {

    const staff = useSelector(state => state.staff.allStaff);
    const section1Data = useSelector(state => state.schedule.section1Data);
    const section2Data = useSelector(state => state.schedule.section2Data);
    const section3Data = useSelector(state => state.schedule.section3Data);

    const SectionRow = ({ data }) => {

        const [ monVal, setMonVal ] = useState(0);
        const [ tueVal, setTueVal ] = useState(0);
        const [ wedVal, setWedVal ] = useState(0);
        const [ thuVal, setThuVal ] = useState(0);
        const [ friVal, setFriVal ] = useState(0);
        const [ total, setTotal ] = useState(0);

        const getLen = (sectionData, pos) => {
            return sectionData.filter(el => el.staff[pos] == data.id).length;
        }

        useEffect(() => {
            setMonVal(getLen(section1Data, 0) + getLen(section3Data, 0) );
            setTueVal(getLen(section1Data, 1) + getLen(section3Data, 1) );
            setWedVal(getLen(section1Data, 2) + getLen(section3Data, 2) );
            setThuVal(getLen(section1Data, 3) + getLen(section3Data, 3) );
            setFriVal(getLen(section1Data, 4) + getLen(section3Data, 4) );
        }, [section1Data, section2Data, section3Data])

        useEffect(() => {
            setTotal(monVal + tueVal + wedVal + thuVal + friVal);
            if(monVal > 1 || tueVal > 1 || wedVal > 1 || thuVal > 1 || friVal > 1) {
                window.alert('Staff should have only one shift per day');
            }
        }, [monVal, tueVal, wedVal, thuVal, friVal])

        useEffect(() => {
            if(total > 7) {
                window.alert('Staff should not have more than 7 shifts in a week');
            }
        }, [total])

        return (
            <tr key={data.name}>
                <td>{ data.name }</td>
                <td>{ monVal }</td>
                <td>{ tueVal }</td>
                <td>{ wedVal }</td>
                <td>{ thuVal }</td>
                <td>{ friVal }</td>
                <td>{ total }</td>
            </tr>
        )
    }

    return (
        <Fragment>
            { staff.map(el => <SectionRow key={el.id} data={el} /> ) }
        </Fragment>
    )
}

export default StaffSection