// Complete list of n8n workflow categories
const workflows = [
    "Activecampaign", "Acuityscheduling", "Affinity", "Aggregate", "Airtable", "Airtabletool", "Airtoptool", "Amqp", "Apitemplateio", "Asana", "Automate", "Automation", "Autopilot", "Awsrekognition", "Awss3", "Awssns", "Awstextract", "Bannerbear", "Baserow", "Beeminder", "Bitbucket", "Bitly", "Bitwarden", "Box", "Calcslive", "Calendly", "Chargebee", "Clickup", "Clockify", "Code", "Coingecko", "Comparedatasets", "Compression", "Convertkit", "Converttofile", "Copper", "Cortex", "Create", "Cron", "Crypto", "Customerio", "Datetime", "Debughelper", "Deep", "Discord", "Discordtool", "Dropbox", "Editimage", "Elasticsearch", "Emailreadimap", "Emailsend", "Emelia", "Error", "Eventbrite", "Executecommand", "Executeworkflow", "Executiondata", "Export", "Extractfromfile", "Facebook", "Facebookleadads", "Figma", "Filter", "Flow", "Form", "Functionitem", "Getresponse", "Github", "Gitlab", "Gmail", "Gmailtool", "Googleanalytics", "Googlebigquery", "Googlecalendar", "Googlecalendartool", "Googlecontacts", "Googledocs", "Googledrive", "Googledrivetool", "Googlesheets", "Googlesheetstool", "Googleslides", "Googletasks", "Googletaskstool", "Googletranslate", "Gotowebinar", "Graphql", "Grist", "Gumroad", "Helpscout", "Http", "Hubspot", "Humanticai", "Hunter", "Intercom", "Interval", "Invoiceninja", "Jira", "Jiratool", "Jotform", "Keap", "Lemlist", "Limit", "Linkedin", "Localfile", "Mailcheck", "Mailchimp", "Mailerlite", "Mailjet", "Manual", "Markdown", "Matrix", "Mattermost", "Mautic", "Microsoftexcel", "Microsoftonedrive", "Microsoftoutlook", "Microsofttodo", "Mondaycom", "Mongodbtool", "Mqtt", "Mysqltool", "N8ntrainingcustomermessenger", "Netlify", "Nocodb", "Noop", "Notion", "Odoo", "Onfleet", "Openai", "Openweathermap", "Paypal", "Pipedrive", "Postgres", "Postgrestool", "Posthog", "Postmark", "Process", "Quickbooks", "Raindrop", "Readbinaryfile", "Readbinaryfiles", "Redis", "Removeduplicates", "Respondtowebhook", "Rssfeedread", "Schedule", "Send", "Shopify", "Signl4", "Slack", "Splitinbatches", "Splitout", "Sse", "Stickynote", "Stopanderror", "Strapi", "Summarize", "Supabase", "Surveymonkey", "Taiga", "Telegram", "Telegramtool", "Thehive", "Todoist", "Toggl", "Travisci", "Trello", "Twilio", "Twitter", "Twittertool", "Typeform", "Uptimerobot", "Wait", "Webflow", "Webhook", "Whatsapp", "Wise", "Woocommerce", "Woocommercetool", "Wordpress", "Writebinaryfile", "Wufoo", "Xml", "Youtube", "Zendesk", "Zohocrm"
];

let currentWorkflows = [...workflows];

function renderWorkflows(workflowList) {
    const grid = document.getElementById('workflowsGrid');
    grid.innerHTML = '';
    
    if (workflowList.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #718096; font-size: 1.2rem; padding: 60px 20px;">No workflows found. Try a different search term.</p>';
        return;
    }
    
    workflowList.forEach(workflow => {
        const card = document.createElement('div');
        card.className = 'workflow-card';
        card.innerHTML = `
            <h3 class="workflow-name">${workflow}</h3>
            <p class="workflow-count">Explore automation workflows</p>
            <a href="https://github.com/Zie619/n8n-workflows/tree/main/workflows/${workflow}" 
               target="_blank" 
               class="download-btn">
                <svg class="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Browse Workflows
            </a>
        `;
        grid.appendChild(card);
    });
}

const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    currentWorkflows = workflows.filter(w => w.toLowerCase().includes(searchTerm));
    
    const sortValue = sortSelect.value;
    if (sortValue === 'az') {
        currentWorkflows.sort((a, b) => a.localeCompare(b));
    } else if (sortValue === 'za') {
        currentWorkflows.sort((a, b) => b.localeCompare(a));
    }
    
    renderWorkflows(currentWorkflows);
});

sortSelect.addEventListener('change', (e) => {
    if (e.target.value === 'az') {
        currentWorkflows.sort((a, b) => a.localeCompare(b));
    } else if (e.target.value === 'za') {
        currentWorkflows.sort((a, b) => b.localeCompare(a));
    } else {
        currentWorkflows = [...workflows];
    }
    renderWorkflows(currentWorkflows);
});

renderWorkflows(currentWorkflows);
