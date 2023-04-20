
import StaffSection from './StaffSection';

const StaffLoad = () => {

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '30px' }}>Load</h2>
            <table cellSpacing="0">
                <thead>
                    <tr>
                        <th>Staff Member</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <StaffSection />
                </tbody>
            </table>
        </div>
    )
}

export default StaffLoad