$routes = @("/", "/about", "/services", "/contact", "/careers", "/patterns/noise.svg", "/patterns/geometric.svg")
$baseUrl = "http://localhost:3001"

foreach ($route in $routes) {
    try {
        # using curl.exe if available to avoid alias issues, or Invoke-WebRequest
        # simpler to use Invoke-WebRequest for status check
        $response = Invoke-WebRequest -Uri "$baseUrl$route" -Method Head -UseBasicParsing -ErrorAction Stop
        Write-Host "[$($response.StatusCode)] $route - OK"
    } catch {
        Write-Host "[FAIL] $route : $($_.Exception.Message)"
    }
}
