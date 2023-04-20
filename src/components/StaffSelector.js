
const StaffSelector = ({ staffData, onStaffSelect, id, value }) => {
    return (
        <select onChange={ev => onStaffSelect(ev, id)} value={value}>
            { staffData.map(el => <option key={el.id} value={el.id}>{el.name}</option>) }
        </select>
    )
}

export default StaffSelector