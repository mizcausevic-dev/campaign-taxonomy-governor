$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$screenshots = Join-Path $root "screenshots"
New-Item -ItemType Directory -Force -Path $screenshots | Out-Null

Add-Type -AssemblyName System.Drawing

function New-ProofImage {
    param(
        [string]$Path,
        [string]$Title,
        [string]$Subtitle,
        [string[]]$Bullets
    )

    $bitmap = New-Object System.Drawing.Bitmap 1600, 1000
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $graphics.Clear([System.Drawing.Color]::FromArgb(10, 18, 32))

    $panelBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(18, 32, 50))
    $accentBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(108, 179, 255))
    $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(236, 243, 248))
    $mutedBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(156, 176, 191))
    $borderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(84, 110, 150), 2)

    $graphics.FillRectangle($panelBrush, 48, 48, 1504, 904)
    $graphics.DrawRectangle($borderPen, 48, 48, 1504, 904)

    $eyebrowFont = New-Object System.Drawing.Font("Segoe UI", 16, [System.Drawing.FontStyle]::Bold)
    $titleFont = New-Object System.Drawing.Font("Georgia", 34, [System.Drawing.FontStyle]::Bold)
    $bodyFont = New-Object System.Drawing.Font("Segoe UI", 18)
    $bulletFont = New-Object System.Drawing.Font("Segoe UI", 20, [System.Drawing.FontStyle]::Bold)

    $graphics.DrawString("Campaign Taxonomy Governor", $eyebrowFont, $accentBrush, 92, 92)
    $graphics.DrawString($Title, $titleFont, $textBrush, 92, 142)
    $graphics.DrawString($Subtitle, $bodyFont, $mutedBrush, 92, 214)

    $y = 320
    foreach ($bullet in $Bullets) {
        $graphics.DrawString("•", $bulletFont, $accentBrush, 108, $y)
        $graphics.DrawString($bullet, $bodyFont, $textBrush, 138, $y + 2)
        $y += 82
    }

    $graphics.DrawString("Synthetic proof render for README packaging.", $bodyFont, $mutedBrush, 92, 880)
    $bitmap.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
    $graphics.Dispose()
    $bitmap.Dispose()
}

New-ProofImage -Path (Join-Path $screenshots "01-overview-proof.png") `
    -Title "Overview proof" `
    -Subtitle "Taxonomy changes, audience blockers, and launch posture in one growth-safe control surface." `
    -Bullets @(
        "Campaign changes map to concrete attribution impact.",
        "Blocked audience dependencies stay visible before launches break.",
        "Launch posture is buyer-readable and operator-safe."
    )

New-ProofImage -Path (Join-Path $screenshots "02-taxonomy-lane-proof.png") `
    -Title "Taxonomy lane" `
    -Subtitle "Each naming change shows owner, reporting risk, and next action." `
    -Bullets @(
        "Campaign names stay linked to CRM and ad impact.",
        "Owners see the next launch-safe move.",
        "High-risk taxonomy drift surfaces early."
    )

New-ProofImage -Path (Join-Path $screenshots "03-audience-risks-proof.png") `
    -Title "Audience risks" `
    -Subtitle "CRM, paid, and analytics blockers stay tied to required evidence." `
    -Bullets @(
        "Each blocker shows what proof is still missing.",
        "Impact areas stay visible for prioritization.",
        "Recovery work remains mapped to a named owner."
    )

New-ProofImage -Path (Join-Path $screenshots "04-launch-readiness-proof.png") `
    -Title "Launch readiness" `
    -Subtitle "Change packets show completeness score, launch window, and go/no-go pressure." `
    -Bullets @(
        "Red packets show immediate launch risk.",
        "Yellow packets preserve the next safe release window.",
        "Green packets stay governed without noise."
    )
