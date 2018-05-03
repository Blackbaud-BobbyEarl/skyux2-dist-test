var SkyResources = (function () {
    /*istanbul ignore next */
    function SkyResources() {
    }
    SkyResources.getString = function (name) {
        var stringObj = this.resources[name];
        if (stringObj) {
            return stringObj.message;
        }
        return name;
    };
    return SkyResources;
}());
export { SkyResources };
SkyResources.resources = {
    "action_bar_actions": {
        "_description": "The label for the actions dropdown on the action button bar",
        "message": "Actions"
    },
    "alert_close": {
        "_description": "Screen reader text for the close button on alerts",
        "message": "Close the alert"
    },
    "avatar_error_not_image_description": {
        "_description": "Message description displayed when the user attempts to upload an avatar file that is not a valid image",
        "message": "Please choose a file that is a valid image."
    },
    "avatar_error_not_image_title": {
        "_description": "Message title displayed when the user attempts to upload an avatar file that is not a valid image",
        "message": "File is not an image."
    },
    "avatar_error_too_large_description": {
        "_description": "Message description displayed when the user attempts to upload an avatar image with a file size that is too large",
        "message": "Please choose an image that is less than {0}."
    },
    "avatar_error_too_large_title": {
        "_description": "Message title displayed when the user attempts to upload an avatar image with a file size that is too large",
        "message": "File is too large."
    },
    "card_checkbox_label": {
        "_description": "Label for the multiselect checkbox for the card component",
        "message": "Select card"
    },
    "checklist_clear_all": {
        "_description": "Text for the link in a checklist to clear selections.",
        "message": "Clear all"
    },
    "checklist_no_items": {
        "_description": "Text in a checklist when no items are shown based on the current filter.",
        "message": "No items found"
    },
    "checklist_select_all": {
        "_description": "Text for the link in a checklist to select all items.",
        "message": "Select all"
    },
    "chevron_collapse": {
        "_description": "Screen reader text for when clicking the chevron would collapse the corresponding section",
        "message": "Collapse"
    },
    "chevron_expand": {
        "_description": "Screen reader text for when clicking the chevron would expand the corresponding section",
        "message": "Expand"
    },
    "colorpicker_alpha": {
        "_description": "Label for the alpha input",
        "message": "A:"
    },
    "colorpicker_apply": {
        "_description": "Label for the apply button",
        "message": "Apply"
    },
    "colorpicker_aria_alpha": {
        "_description": "aria label for the alpha input",
        "message": "Alpha"
    },
    "colorpicker_aria_blue": {
        "_description": "aria label for the blue input",
        "message": "Blue"
    },
    "colorpicker_aria_green": {
        "_description": "aria label for the green input",
        "message": "Green"
    },
    "colorpicker_aria_hex": {
        "_description": "aria label for the hex input",
        "message": "Hex"
    },
    "colorpicker_aria_red": {
        "_description": "aria label for the red input",
        "message": "Red"
    },
    "colorpicker_blue": {
        "_description": "Label for the blue input",
        "message": "B:"
    },
    "colorpicker_close": {
        "_description": "Label for the close button",
        "message": "Close"
    },
    "colorpicker_green": {
        "_description": "Label for the green input",
        "message": "G:"
    },
    "colorpicker_hex": {
        "_description": "aria label for the hex input",
        "message": "Hex:"
    },
    "colorpicker_preset_color": {
        "_description": "Label for the preset colors",
        "message": "Preset Color:"
    },
    "colorpicker_red": {
        "_description": "Label for the red input",
        "message": "R:"
    },
    "colorpicker_reset": {
        "_description": "Label for the reset button to change the color back to the initial color",
        "message": "Reset"
    },
    "confirm_dialog_default_ok_text": {
        "_description": "Default text for confirm dialog's OK button",
        "message": "OK"
    },
    "confirm_dialog_default_yes_text": {
        "_description": "Default text for confirm dialog's Yes button",
        "message": "Yes"
    },
    "confirm_dialog_default_no_text": {
        "_description": "Default text for confirm dialog's No button",
        "message": "No"
    },
    "confirm_dialog_default_cancel_text": {
        "_description": "Default text for confirm dialog's Cancel button",
        "message": "Cancel"
    },
    "context_menu_default_label": {
        "_description": "The label on the context menu button used for screen readers when the consumer has not specified a label",
        "message": "Context menu"
    },
    "date_field_invalid_date_message": {
        "_description": "error message shown when an invalid date is entered.",
        "message": "Please enter a valid date"
    },
    "date_range_picker_at_any_time": {
        "_description": "text for date range picker",
        "message": "At any time"
    },
    "date_range_picker_filter_description_at_any_time": {
        "_description": "text for date range picker",
        "message": "{0} at any time"
    },
    "date_range_picker_filter_description_last_calendar_year": {
        "_description": "text for date range picker",
        "message": "{0} from last calendar year"
    },
    "date_range_picker_filter_description_last_fiscal_year": {
        "_description": "text for date range picker",
        "message": "{0} from last fiscal year"
    },
    "date_range_picker_filter_description_last_month": {
        "_description": "text for date range picker",
        "message": "{0} from last month"
    },
    "date_range_picker_filter_description_last_quarter": {
        "_description": "text for date range picker",
        "message": "{0} from last quarter"
    },
    "date_range_picker_filter_description_last_week": {
        "_description": "text for date range picker",
        "message": "{0} from last week"
    },
    "date_range_picker_filter_description_next_calendar_year": {
        "_description": "text for date range picker",
        "message": "{0} for next calendar year"
    },
    "date_range_picker_filter_description_next_fiscal_year": {
        "_description": "text for date range picker",
        "message": "{0} for next fiscal year"
    },
    "date_range_picker_filter_description_next_month": {
        "_description": "text for date range picker",
        "message": "{0} for next month"
    },
    "date_range_picker_filter_description_next_quarter": {
        "_description": "text for date range picker",
        "message": "{0} for next quarter"
    },
    "date_range_picker_filter_description_next_week": {
        "_description": "text for date range picker",
        "message": "{0} for next week"
    },
    "date_range_picker_filter_description_specific_range": {
        "_description": "text for date range picker",
        "message": "{0} from {1} to {2}"
    },
    "date_range_picker_filter_description_this_calendar_year": {
        "_description": "text for date range picker",
        "message": "{0} for this calendar year"
    },
    "date_range_picker_filter_description_this_fiscal_year": {
        "_description": "text for date range picker",
        "message": "{0} for this fiscal year"
    },
    "date_range_picker_filter_description_this_month": {
        "_description": "text for date range picker",
        "message": "{0} for this month"
    },
    "date_range_picker_filter_description_this_quarter": {
        "_description": "text for date range picker",
        "message": "{0} for this quarter"
    },
    "date_range_picker_filter_description_this_week": {
        "_description": "text for date range picker",
        "message": "{0} for this week"
    },
    "date_range_picker_filter_description_today": {
        "_description": "text for date range picker",
        "message": "{0} for today"
    },
    "date_range_picker_filter_description_tomorrow": {
        "_description": "text for date range picker",
        "message": "{0} for tomorrow"
    },
    "date_range_picker_filter_description_yesterday": {
        "_description": "text for date range picker",
        "message": "{0} from yesterday"
    },
    "date_range_picker_from_date": {
        "_description": "label for date range picker",
        "message": "From date"
    },
    "date_range_picker_last_calendar_year": {
        "_description": "text for date range picker",
        "message": "Last calendar year"
    },
    "date_range_picker_last_fiscal_year": {
        "_description": "text for date range picker",
        "message": "Last fiscal year"
    },
    "date_range_picker_last_month": {
        "_description": "text for date range picker",
        "message": "Last month"
    },
    "date_range_picker_last_quarter": {
        "_description": "text for date range picker",
        "message": "Last quarter"
    },
    "date_range_picker_last_week": {
        "_description": "text for date range picker",
        "message": "Last week"
    },
    "date_range_picker_max_date_error": {
        "_description": "error message for date range picker",
        "message": "Start date must be before end date"
    },
    "date_range_picker_min_date_error": {
        "_description": "error message for date range picker",
        "message": "End date must be after start date"
    },
    "date_range_picker_next_calendar_year": {
        "_description": "text for date range picker",
        "message": "Next calendar year"
    },
    "date_range_picker_next_fiscal_year": {
        "_description": "text for date range picker",
        "message": "Next fiscal year"
    },
    "date_range_picker_next_month": {
        "_description": "text for date range picker",
        "message": "Next month"
    },
    "date_range_picker_next_quarter": {
        "_description": "text for date range picker",
        "message": "Next quarter"
    },
    "date_range_picker_next_week": {
        "_description": "text for date range picker",
        "message": "Next week"
    },
    "date_range_picker_specific_range": {
        "_description": "text for date range picker",
        "message": "Specific range"
    },
    "date_range_picker_this_calendar_year": {
        "_description": "text for date range picker",
        "message": "This calendar year"
    },
    "date_range_picker_this_fiscal_year": {
        "_description": "text for date range picker",
        "message": "This fiscal year"
    },
    "date_range_picker_this_month": {
        "_description": "text for date range picker",
        "message": "This month"
    },
    "date_range_picker_this_quarter": {
        "_description": "text for date range picker",
        "message": "This quarter"
    },
    "date_range_picker_this_week": {
        "_description": "text for date range picker",
        "message": "This week"
    },
    "date_range_picker_to_date": {
        "_description": "label for date range picker",
        "message": "To date"
    },
    "date_range_picker_today": {
        "_description": "text for date range picker",
        "message": "Today"
    },
    "date_range_picker_tomorrow": {
        "_description": "text for date range picker",
        "message": "Tomorrow"
    },
    "date_range_picker_yesterday": {
        "_description": "text for date range picker",
        "message": "Yesterday"
    },
    "datepicker_clear": {
        "_description": "Text displayed in the Clear button of the datepicker",
        "message": "Clear"
    },
    "datepicker_close": {
        "_description": "Text displayed in the Close button of the datepicker",
        "message": "Done"
    },
    "datepicker_today": {
        "_description": "Text displayed in the Today button of the datepicker",
        "message": "Today"
    },
    "definition_list_none_found": {
        "_description": "The default text to show when a definition list item has no value",
        "message": "None found"
    },
    "error_component_broken_description": {
        "_description": "The error component description message for the broken error type",
        "message": "Try to refresh this page or come back later."
    },
    "error_component_broken_title": {
        "_description": "The error component title message for the broken error type",
        "message": "Sorry, something went wrong."
    },
    "error_component_construction_description": {
        "_description": "The error component description message for the construction error type",
        "message": "Thanks for your patience while improvements are made! \n Please check back in a little while."
    },
    "error_component_construction_title": {
        "_description": "The error component title message for the construction error type",
        "message": "This page will return soon."
    },
    "error_component_not_found_title": {
        "_description": "The error component title message for the not found error type",
        "message": "Sorry, we can't reach that page."
    },
    "error_component_security_title": {
        "_description": "The error component title message for the security error type",
        "message": "You don't have permission to access that page."
    },
    "error_description_broken": {
        "_description": "Text used for the error description to when page is broken.",
        "message": "Try to refresh this page or come back later."
    },
    "error_description_construction": {
        "_description": "Text used for the error description when page is under construction.",
        "message": "Thanks for your patience while improvements are made!\nPlease check back in a little while."
    },
    "error_title_broken": {
        "_description": "Text used for the error title when something is broken",
        "message": "Sorry, something went wrong."
    },
    "error_title_construction": {
        "_description": "Text used for the error title when page is under construction.",
        "message": "This page will return soon."
    },
    "error_title_notfound": {
        "_description": "Text used for the error title when page is not found.",
        "message": "Sorry, we can't reach that page."
    },
    "errormodal_ok": {
        "_description": "Text used on the primary button to dismiss the error modal.",
        "message": "OK"
    },
    "file_item_delete": {
        "_description": "Label for the button that deletes a file",
        "message": "Delete file"
    },
    "file_size_b_plural": {
        "_description": "",
        "message": "{0} bytes"
    },
    "file_size_b_singular": {
        "_description": "",
        "message": "{0} byte"
    },
    "file_size_gb": {
        "_description": "",
        "message": "{0} GB"
    },
    "file_size_kb": {
        "_description": "",
        "message": "{0} KB"
    },
    "file_size_mb": {
        "_description": "",
        "message": "{0} MB"
    },
    "file_upload_drag_file_here": {
        "_description": "",
        "message": "Drag a file here"
    },
    "file_upload_drag_or_click": {
        "_description": "Label for file drop",
        "message": "Drag a file here or click to browse"
    },
    "file_upload_drop_files_here": {
        "_description": "",
        "message": "Drop files here"
    },
    "file_upload_invalid_file": {
        "_description": "",
        "message": "This file type is invalid"
    },
    "file_upload_link_input": {
        "_description": "Label for input to upload file",
        "message": "Add a link to a file"
    },
    "file_upload_link_placeholder": {
        "_description": "",
        "message": "http://www.something.com/file"
    },
    "file_upload_or_click_to_browse": {
        "_description": "",
        "message": "or click to browse"
    },
    "file_upload_paste_link": {
        "_description": "",
        "message": "Paste a link to a file"
    },
    "file_upload_paste_link_done": {
        "_description": "",
        "message": "Done"
    },
    "filter_button_title": {
        "_description": "Text for the filter button title",
        "message": "Filters"
    },
    "filter_summary_header": {
        "_description": "Text for the filter summary component",
        "message": "Filter"
    },
    "flyout_close": {
        "_description": "Text for flyout close button",
        "message": "Close flyout"
    },
    "grid_action_bar_cancel_mobile_actions": {
        "_description": "Close the menu where you choose an action in mobile multiselect.",
        "message": "Cancel"
    },
    "grid_action_bar_choose_action": {
        "_description": "Open a menu to choose an action in mobile  multiselect.",
        "message": "Choose an action"
    },
    "grid_action_bar_clear_selection": {
        "_description": "Clear the selections in the grid.",
        "message": "Clear selection"
    },
    "grid_back_to_top": {
        "_description": "Text for link in grid to scroll back to the top.",
        "message": "Back to top"
    },
    "grid_column_picker_all_categories": {
        "_description": "Button text for category filters used to indicate that all columns should be shown in the column picker",
        "message": "All"
    },
    "grid_column_picker_cancel": {
        "_description": "Button text for cancelling changes made in the grid column picker",
        "message": "Cancel"
    },
    "grid_column_picker_description_header": {
        "_description": "In the column picker, the header for the column showing the description of the columns to include in the grid.",
        "message": "Description"
    },
    "grid_column_picker_header": {
        "_description": "Header text for the grid column picker screen",
        "message": "Choose columns to show in the list"
    },
    "grid_column_picker_name_header": {
        "_description": "In the column picker, the header for the column showing the names of the columns to include in the grid.",
        "message": "Column"
    },
    "grid_column_picker_search_no_columns": {
        "_description": "Displays when no columns are found for the specified search text.",
        "message": "No columns found"
    },
    "grid_column_picker_search_placeholder": {
        "_description": "Search text placeholder for the search box on the grid column picker",
        "message": "Search for columns"
    },
    "grid_column_picker_submit": {
        "_description": "Button text for applying changes made in the grid column picker",
        "message": "Apply changes"
    },
    "grid_columns_button": {
        "_description": "Label for button to select columns to display in a grid.",
        "message": " Choose columns"
    },
    "grid_filters_apply": {
        "_description": "Text for button on filters flyout to apply the selected filters to the grid",
        "message": "Apply filters"
    },
    "grid_filters_button": {
        "_description": "Label for button to select filters to be applied to a grid.",
        "message": "Filters"
    },
    "grid_filters_clear": {
        "_description": "Text for button on filters flyout to clear the selected filters for the grid",
        "message": "Clear"
    },
    "grid_filters_header": {
        "_description": "Header text for grid filters flyout",
        "message": "Filter"
    },
    "grid_filters_hide": {
        "_description": "Hide link text for grid filters flyout",
        "message": "Hide"
    },
    "grid_filters_summary_header": {
        "_description": "Header text for filter summary on top of grid",
        "message": "Filter:"
    },
    "grid_load_more": {
        "_description": "The text for the button to load additional rows into the grid if more rows are available.",
        "message": "Load more"
    },
    "grid_search_placeholder": {
        "_description": "Placeholder text in grid search box",
        "message": "Find in this list"
    },
    "link_records_item_info_match": {
        "_description": "",
        "message": "A possible match has been identified for this record. Would you like to link it?"
    },
    "link_records_item_info_no_match": {
        "_description": "",
        "message": "We are not able to identify a possible match for this record."
    },
    "link_records_item_info_linked": {
        "_description": "",
        "message": "You have successfully linked this record!"
    },
    "link_records_item_info_created": {
        "_description": "",
        "message": "You have successfully created and linked this record!"
    },
    "link_records_item_info_edit": {
        "_description": "",
        "message": "Do you want to update this record with this new information?"
    },
    "link_records_item_header_created": {
        "_description": "",
        "message": "Record created"
    },
    "link_records_item_header_no_match": {
        "_description": "",
        "message": "No match found"
    },
    "link_records_item_header_match": {
        "_description": "",
        "message": "Match found"
    },
    "link_records_item_footer_link": {
        "_description": "",
        "message": "Link this record"
    },
    "link_records_item_footer_search": {
        "_description": "",
        "message": "Add or search for record"
    },
    "link_records_item_footer_unlink": {
        "_description": "",
        "message": "Remove this link"
    },
    "link_records_item_footer_create": {
        "_description": "",
        "message": "Create a new record"
    },
    "link_records_item_footer_link_with_updating": {
        "_description": "",
        "message": "Apply Updates"
    },
    "link_records_item_footer_link_without_updating": {
        "_description": "",
        "message": "Link without updating"
    },
    "link_records_item_footer_cancel": {
        "_description": "",
        "message": "Cancel"
    },
    "link_records_item_title_default": {
        "_description": "",
        "message": "Item"
    },
    "link_records_item_content_no_match": {
        "_description": "",
        "message": "no match"
    },
    "link_records_item_diff_header_field": {
        "_description": "",
        "message": "Field"
    },
    "link_records_item_diff_header_current_value": {
        "_description": "",
        "message": "Current value"
    },
    "link_records_item_diff_header_new_value": {
        "_description": "",
        "message": "New value"
    },
    "link_records_item_diff_header_update": {
        "_description": "",
        "message": "Update"
    },
    "link_records_item_diff_content_no_value": {
        "_description": "",
        "message": "No value"
    },
    "list_show_secondary_actions": {
        "_description": "Label for the button that opens the secondary actions menu in the list toolbar",
        "message": "Show secondary actions"
    },
    "modal_close": {
        "_description": "Text for modal close button",
        "message": "Close modal"
    },
    "open_help": {
        "_description": "Text for modal header Open Help button",
        "message": "Open Help"
    },
    "modal_footer_cancel_button": {
        "_description": "Default label text for modal cancel button",
        "message": "Cancel"
    },
    "modal_footer_primary_button": {
        "_description": "Default label text for modal primary button",
        "message": "Save"
    },
    "month_short_april": {
        "_description": "",
        "message": "Apr"
    },
    "month_short_august": {
        "_description": "",
        "message": "Aug"
    },
    "month_short_december": {
        "_description": "",
        "message": "Dec"
    },
    "month_short_february": {
        "_description": "",
        "message": "Feb"
    },
    "month_short_january": {
        "_description": "",
        "message": "Jan"
    },
    "month_short_july": {
        "_description": "",
        "message": "Jul"
    },
    "month_short_june": {
        "_description": "",
        "message": "Jun"
    },
    "month_short_march": {
        "_description": "",
        "message": "Mar"
    },
    "month_short_may": {
        "_description": "",
        "message": "May"
    },
    "month_short_november": {
        "_description": "",
        "message": "Nov"
    },
    "month_short_october": {
        "_description": "",
        "message": "Oct"
    },
    "month_short_september": {
        "_description": "",
        "message": "Sep"
    },
    "number_billion_abrev": {
        "_description": "Abreviation for Billion used by numbers",
        "message": "B"
    },
    "number_million_abrev": {
        "_description": "Abreviation for million used by numbers",
        "message": "M"
    },
    "number_thousands_abrev": {
        "_description": "Abreviation for Thousands used by numbers",
        "message": "K"
    },
    "number_trillion_abrev": {
        "_description": "Abreviation for Trillion used by numbers",
        "message": "T"
    },
    "page_noaccess_button": {
        "_description": "",
        "message": "Return to a non-classified page"
    },
    "page_noaccess_description": {
        "_description": "",
        "message": "Sorry, you don't have rights to this page.\nIf you feel you should, please contact your system administrator."
    },
    "page_noaccess_header": {
        "_description": "",
        "message": "Move along, there's nothing to see here"
    },
    "paging_label": {
        "_description": "Default text for the label for the pagination component",
        "message": "Pagination"
    },
    "paging_next": {
        "_description": "Text for the label for the next button on the pagination component",
        "message": "Next"
    },
    "paging_previous": {
        "_description": "Text for the label for the previous button on the pagination component",
        "message": "Previous"
    },
    "reorder_top": {
        "_description": "Text displayed to indicate that a row can be pushed to the top of the list",
        "message": "Top"
    },
    "repeater_item_checkbox_label": {
        "_description": "Label for the repeater item checkbox for the repeater component",
        "message": "Select row"
    },
    "search_dismiss": {
        "_description": "Label for dismissing search input",
        "message": "Dismiss search"
    },
    "search_label": {
        "_description": "Label for search component functionality",
        "message": "Search items"
    },
    "search_open": {
        "_description": "Label for opening search input",
        "message": "Open search"
    },
    "search_placeholder": {
        "_description": "Placeholder text for search input component",
        "message": "Find in this list"
    },
    "searchfield_no_records": {
        "_description": "text for ui-select search control when no records are found.",
        "message": "Sorry, no matching records found"
    },
    "searchfield_searching": {
        "_description": "text for ui-select search control while performing a remote search",
        "message": "Searching..."
    },
    "select_field_multiple_select_open_button": {
        "_description": "The default button text for the select field when the user is allowed to select multiple values (plural)",
        "message": "Select values"
    },
    "select_field_multiple_select_picker_heading": {
        "_description": "The default heading text for the select field picker when the user is allowed to select multiple values (plural)",
        "message": "Select values"
    },
    "select_field_multiple_select_summary": {
        "_description": "Text displayed when the user has more than the maximum items selected",
        "message": "{0} items selected"
    },
    "select_field_single_select_placeholder": {
        "_description": "The default placeholder text for the select field when the user is allowed to select one value (singular)",
        "message": "Select a value"
    },
    "select_field_single_select_picker_heading": {
        "_description": "The default heading text for the select field picker when the user is allowed to select one value (singular)",
        "message": "Select a value"
    },
    "select_field_single_select_open_button_title": {
        "_description": "The default title text for the select field picker when the user is allowed to select one value (singular)",
        "message": "Click to select a value"
    },
    "select_field_single_select_clear_button_title": {
        "_description": "The default button text for the single-select clear button",
        "message": "Clear selection"
    },
    "select_field_picker_close_button": {
        "_description": "Text displayed on the button in multi select mode to close form",
        "message": "Close"
    },
    "select_field_picker_save_button": {
        "_description": "Text displayed on the primary dialog button to confirm selection of multiple items",
        "message": "Select"
    },
    "select_field_picker_show_all_category": {
        "_description": "The default category name for the select field picker that will display all possible results.",
        "message": "Show all"
    },
    "sort_button_label": {
        "_description": "Text for the sort button",
        "message": "Sort"
    },
    "sort_menu_heading": {
        "_description": "Text for the heading in the sort dropdown",
        "message": "Sort by"
    },
    "tab_add": {
        "_description": "Label for the tab add button",
        "message": "Add tab"
    },
    "tab_close": {
        "_description": "Label for the tab close button",
        "message": "Close tab"
    },
    "tab_open": {
        "_description": "Label for the tab open button",
        "message": "Open tab"
    },
    "text_expand_close_text": {
        "_description": "Text for the close button on the text expand modal",
        "message": "Close"
    },
    "text_expand_modal_title": {
        "_description": "",
        "message": "Expanded view"
    },
    "text_expand_see_less": {
        "_description": "Display less text content",
        "message": "See less"
    },
    "text_expand_see_more": {
        "_description": "",
        "message": "See more"
    },
    "tile_settings": {
        "_description": "Label for settings button in the tile",
        "message": "Settings"
    },
    "timepicker_close": {
        "_description": "The close button for the timepicker modal",
        "message": "Done"
    },
    "token_dismiss_button_title": {
        "_description": "The default text for the token dismiss button title.",
        "message": "Remove item"
    },
    "vertical_tabs_show_tabs_text": {
        "_description": "The default text for the show tabs button in mobile",
        "message": "Tab list"
    },
    "wizard_navigator_finish": {
        "_description": "Text displayed on the next button when a wizard is ready for completion.",
        "message": "Finish"
    },
    "wizard_navigator_next": {
        "_description": "Text displayed on a wizard's next button.",
        "message": "Next"
    },
    "wizard_navigator_previous": {
        "_description": "Text displayed on a wizard's previous button.",
        "message": "Previous"
    }
};
//# sourceMappingURL=resources.js.map