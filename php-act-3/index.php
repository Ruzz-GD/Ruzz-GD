<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, shrink-to-fit=no">
    <title>Create a Simple Website</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center">Create a Simple Website</h1>
        <form id="websiteForm">
            <div class="mb-3">
                <label for="title" class="form-label">Website Title</label>
                <input type="text" class="form-control" id="title" name="title" required>
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">Website Content</label>
                <textarea class="form-control" id="content" name="content" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Save Website</button>
            <a href="view-website.php" class="btn btn-secondary">View Website</a>
        </form>
    </div>

    <div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="successModalLabel">Success</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Website saved successfully!
                </div>
                <div class="modal-footer">
                    <a href="view-website.php" class="btn btn-secondary">View Website</a>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <script>
        document.getElementById('websiteForm').addEventListener('submit', async function(event) {
            event.preventDefault();
            const formData = new FormData(this);

            try {
                const response = await fetch('save-website.php', {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.text();
                document.getElementById('title').value = "";  // Clear title input
                document.getElementById('content').value = ""; // Clear content textarea

                const successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show();
                
            } catch (error) {
                console.error('Error:', error);
            }
        });
    </script>
</body>
</html>
