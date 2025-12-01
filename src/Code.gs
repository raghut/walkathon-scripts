/**
 * Walkathon Scripts - Main entry point
 * 
 * This file contains the main functions for the Walkathon Google Apps Script project.
 */

/**
 * Main function that runs when the script is executed.
 */
function main() {
  Logger.log('Walkathon Scripts initialized');
}

/**
 * Creates a custom menu in Google Sheets when the spreadsheet is opened.
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Walkathon')
    .addItem('Run Main', 'main')
    .addToUi();
}
