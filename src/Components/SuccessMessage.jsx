import React from 'react'

const SuccessMessage = () => {
return (
<div>
    <div class="alert alert-dismissible alert-success">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong>Well done!</strong> You successfully updated <a href="#" class="alert-link">perfectly without any error
            message</a>.
    </div>
</div>
)
}

export default SuccessMessage