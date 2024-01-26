import "../../scss/dashboard/footer.scss"

function DashboardFooter () {
    return ( 
        <footer className="dashboard-footer d-flex align-item-center justify-content-between">
             <div>
                <a href="/" target="_blank">Zaky dev</a>
                <span className="ms-1">&copy; { new Date().getFullYear() } creativeLabs.</span>
            </div>
            <div className="ms-auto">
                <span className="me-1" target="_blank">Powered by</span>
                <a href="/">amazon App</a>
            </div>
        </footer>
     );
}

export default DashboardFooter;