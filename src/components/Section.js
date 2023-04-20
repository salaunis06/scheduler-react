import { useDispatch, useSelector } from "react-redux";
import StaffSelector from "./StaffSelector";
import { Fragment, useEffect, useState } from "react";
import { updateStaffDataInSection1, updateStaffDataInSection2, updateStaffDataInSection3 } from "../store/schedule";

const Section = ({ sectionId, sectionData, bg, onStaffChange }) => {
    const dispatch = useDispatch();
    const [staffData, setStaffData] = useState([]);
    const staff = useSelector(state => state.staff.allStaff);

    useEffect(() => {
        const data = [ { id: 0, name: 'Select' }, ...staff ];
        setStaffData(data);
    }, [staff])

    const onStaffSelect = (ev, id, day) => {
        if(sectionId == 1) dispatch(updateStaffDataInSection1({ id, value: ev.target.value, index: day - 1 }))
        else if(sectionId == 2) dispatch(updateStaffDataInSection2({ id, value: ev.target.value, index: day - 1 }))
        else if(sectionId == 3) dispatch(updateStaffDataInSection3({ id, value: ev.target.value, index: day - 1 }))
    }

    const SectionRow = ({ data }) => {
        return (
            <tr key={data.name} style={{ background: `${bg}` }}>
                <td>{ data.name }</td>
                <td>
                    <StaffSelector id={data.id} value={data.staff[0] ? data.staff[0] : 0} staffData={staffData} onStaffSelect={ (ev, id) => onStaffSelect(ev, id, 1)} />
                </td>
                <td>
                    <StaffSelector id={data.id} value={data.staff[1] ? data.staff[1] : 0} staffData={staffData} onStaffSelect={ (ev, id) => onStaffSelect(ev, id, 2)} />
                </td>
                <td>
                    <StaffSelector id={data.id} value={data.staff[2] ? data.staff[2] : 0} staffData={staffData} onStaffSelect={ (ev, id) => onStaffSelect(ev, id, 3)} />
                </td>
                <td>
                    <StaffSelector id={data.id} value={data.staff[3] ? data.staff[3] : 0} staffData={staffData} onStaffSelect={ (ev, id) => onStaffSelect(ev, id, 4)} />
                </td>
                <td>
                    <StaffSelector id={data.id} value={data.staff[4] ? data.staff[4] : 0} staffData={staffData} onStaffSelect={ (ev, id) => onStaffSelect(ev, id, 5)} />
                </td>
            </tr>
        )
    }

    return (
        <Fragment>
            { sectionData.map(el => <SectionRow key={el.id} data={el} /> ) }
        </Fragment>
    )
}

export default Section