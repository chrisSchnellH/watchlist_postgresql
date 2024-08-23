export const Pagination = (props) => {

    const pageNumbers = [];

    if (props.currentPage === 1) {

        pageNumbers.push(props.currentPage);
        if (props.totalPages >= props.currentPage + 1) {
            pageNumbers.push(props.currentPage + 1);
        }
        if (props.totalPages >= props.currentPage + 2) {
            pageNumbers.push(props.currentPage + 2);
        }
    } else if (props.currentPage === props.totalPages) {

        if (props.currentPage - 2 > 0) {
            pageNumbers.push(props.currentPage - 2);
        }
        if (props.currentPage - 1 > 0) {
            pageNumbers.push(props.currentPage - 1);
        }
        pageNumbers.push(props.currentPage);
    } else {

        if (props.currentPage - 1 > 0) {
            pageNumbers.push(props.currentPage - 1);
        }
        pageNumbers.push(props.currentPage);
        if (props.currentPage + 1 <= props.totalPages) {
            pageNumbers.push(props.currentPage + 1);
        }
    }

    return (
        <nav className="mt-3 ">
            <ul className="pagination d-flex justify-content-center ">
                <li className="page-item" onClick={() => props.paginate(1)}>
                    <button className="page-link">
                        First Page
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} onClick={() => props.paginate(number)} className={'page-item ' + (props.currentPage === number ? 'active' : '')} >
                        <button className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
                <li className="page-item" onClick={() => props.paginate(props.totalPages)}>
                    <button className="page-link">
                        Last Page ({props.totalPages})
                    </button>
                </li>
            </ul>
        </nav>
    );
}