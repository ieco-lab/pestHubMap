# 3_Clean_Harmonize_Data
# Overview
<p>Step 3 is broken into two parts with folders titles: </p>
<ul>
  <li><strong>3A: Clean Hub Data</strong>, containing:</li>
  <ul>
    <li><strong>3A_Cleaning_Hub_Data.html</strong>: R code explaining steps needed to clean raw hub data to be able to put into template</li>
    <li><strong>Hub_Data_Clean folder</strong>: contains cleaned hub data files exported from R code</li>
    <ul>
      <li><em>hospitals.csv</em></li>
      <li><em>policeStations.csv</em></li>
      <li><em>universities.csv</em></li>
    </ul>
  </ul>
  <li><strong>3B: Harmonized Spatial Data</strong>, containing:</li>
  <ul>
    <li><strong>3B_Harmonizing_Spatial_Data.html</strong>: R code explaining steps needed to clean raw spatial data to be able to put into template</li>
    <li><strong>Spatial_Data_Clean folder</strong>: contains cleaned hub data files exported from R code</li>
    <ul>
      <li><em>county_1km_grids folder</em>: contains .shapefiles files of 1km grids of every county in PA</li>
      <li><em>county_outline.shp</em>: shapefile that outlines counties in PA</li>
      <li><em>establihsment_risk</em>: shapefile with spotted lanternfly establishment risk on a scale from 0-1 for each PA subcounty</li>
      <li><em>hub_density</em>: the number of hubs (hospitals, police stations, and universities) in each PA subcounty</li>
    </ul>
  </ul> <br>

<p>Upon the completion of step 3, all data will be ready to put into pestHubMap template and SQL database.</p>
