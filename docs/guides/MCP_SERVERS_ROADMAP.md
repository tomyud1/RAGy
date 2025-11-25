# MCP Servers Roadmap for RAGy

This document tracks all MCP servers we want to integrate and custom tools we need to build for the RAGy system.

## Priority Levels

- 🔴 **Critical** - Must-have for core functionality
- 🟡 **High** - Significant value for target users
- 🟢 **Medium** - Nice to have, expands use cases
- ⚪ **Low** - Future consideration

---

## Custom Tools to Build (No Good Free MCP Exists)

### 🔴 1. Spreadsheet Analysis Tool

**Why Build**: No existing MCP handles Excel/CSV analysis properly for our use cases.

**Tools to Add**:
- `parse_spreadsheet` - Extract data from xlsx/csv/ods files
- `analyze_columns` - Get statistics, data types, patterns, outliers
- `query_spreadsheet` - SQL-like queries on spreadsheet data
- `detect_formulas` - Extract and explain Excel formulas
- `create_chart_data` - Generate chart configurations for visualization
- `compare_sheets` - Diff between different versions

**Use Cases**:
- Accountant: "Analyze all expense categories and find anomalies"
- Business Owner: "Show me monthly revenue trends"
- Researcher: "Find correlation between columns X and Y"

**Implementation**: Node.js using `xlsx`, `papaparse`, or Python using `openpyxl`, `pandas`

**Limitations**:
- Large files (>100MB) may be slow
- Complex Excel macros not supported
- Formulas evaluated as values, not re-calculated

---

### 🔴 2. Document Structure Analyzer

**Why Build**: Current tools only do semantic search, not structural analysis.

**Tools to Add**:
- `extract_sections` - Parse document hierarchy (chapters, sections, subsections)
- `identify_tables` - Find and extract all tables with context
- `extract_citations` - Pull references, footnotes, bibliographies
- `compare_documents` - Diff between document versions
- `extract_metadata` - Authors, dates, keywords, document properties
- `find_definitions` - Extract term definitions from documents

**Use Cases**:
- Researcher: "Extract all citations from these 50 papers"
- Lawyer: "Compare contract versions and highlight changes"
- Student: "Create a summary of all chapter headings"

**Implementation**: Node.js using Docling output + custom parsing logic

**Limitations**:
- Quality depends on PDF structure (OCR'd PDFs harder)
- Complex nested structures may be flattened
- Multi-column layouts can be tricky

---

### 🔴 3. Calculation & Formula Engine

**Why Build**: AI hallucinates numbers - users need verified calculations.

**Tools to Add**:
- `calculate_expression` - Safe math evaluation
- `financial_calculations` - NPV, IRR, loan amortization, depreciation
- `statistical_analysis` - Mean, median, std dev, correlations, regression
- `unit_conversions` - Length, weight, temperature, currency
- `percentage_calculations` - Growth rates, margins, changes
- `date_calculations` - Date differences, business days, age calculations

**Use Cases**:
- Accountant: "Calculate NPV for these cash flows at 8% discount rate"
- Engineer: "Convert 500 PSI to kPa"
- Business: "Calculate year-over-year growth rate"

**Implementation**: Node.js using `mathjs`, `finance.js`, or Python using `numpy`, `scipy`

**Limitations**:
- No support for symbolic math
- Limited to predefined formula types
- Currency conversions need live exchange rates (API)

---

### 🟡 4. Data Visualization Config Generator

**Why Build**: Users want charts, not just numbers.

**Tools to Add**:
- `create_chart_config` - Generate Chart.js or Plotly configurations
- `suggest_chart_type` - Recommend best visualization for data
- `create_dashboard_layout` - Multi-chart dashboard configs
- `export_chart_image` - Render charts to PNG/SVG

**Use Cases**:
- Business Owner: "Create a dashboard showing sales by region"
- Researcher: "Visualize this correlation data"
- Accountant: "Show expense breakdown as pie chart"

**Implementation**: Node.js using `chart.js`, `plotly.js` configs

**Limitations**:
- Generates configs only, not rendered images (unless using headless browser)
- Limited chart types
- No interactive dashboards

---

### 🟡 5. Export & Report Generator

**Why Build**: Users need professional deliverables.

**Tools to Add**:
- `export_to_pdf` - Generate PDF reports with charts and tables
- `export_to_docx` - Create Word documents
- `export_to_pptx` - Create PowerPoint presentations
- `create_executive_summary` - Auto-generate summary reports
- `apply_template` - Use predefined report templates

**Use Cases**:
- Business Owner: "Create a quarterly report PDF"
- Researcher: "Export findings to a presentation"
- Lawyer: "Generate case summary document"

**Implementation**: Node.js using `pdfkit`, `docx`, `pptxgenjs`

**Limitations**:
- Templates need to be predefined
- Complex formatting may be limited
- Large reports may be slow to generate

---

## Free MCP Servers to Integrate

### 🔴 Vector Databases

#### Qdrant MCP Server
**What It Does**: High-performance vector database for semantic search at scale.

**Tools**:
- `search` - Semantic similarity search with filters
- `upsert` - Add/update vectors with metadata
- `delete` - Remove vectors
- `scroll` - Paginate through results
- `create_collection` - Set up new vector spaces
- `get_collection_info` - Metadata about collections

**Why We Need It**:
- Better performance than file-based storage
- Advanced metadata filtering
- Better clustering and organization
- Professional-grade persistence

**Use Cases**:
- Scale to millions of document chunks
- Filter search by date, author, document type
- Organize multiple knowledge bases

**Free?**: ✅ Yes - Open source, runs locally

**Limitations**:
- Requires separate service running
- Memory usage scales with vector count
- No built-in embedding generation

**How to Use**: Use their existing vectors OR re-embed with their model

---

#### Milvus MCP Server
**What It Does**: Enterprise-grade vector database with advanced features.

**Tools**:
- Similar to Qdrant but more enterprise features
- Partitioning, sharding for massive scale
- Time travel queries (query historical states)

**Why Consider It**: If you need to scale beyond Qdrant's capabilities

**Free?**: ✅ Yes - Open source, but heavier setup

**Limitations**:
- More complex setup (needs etcd, minio)
- Heavier resource usage
- Overkill for most use cases

**Recommendation**: Start with Qdrant, move to Milvus only if needed

---

### 🔴 Structured Data Analysis

#### DuckDB MCP Server
**What It Does**: Analytical SQL queries on files without loading into database.

**Tools**:
- `execute_query` - Run SQL on CSV, Parquet, JSON files
- `describe_table` - Get schema and statistics
- `list_tables` - See available data
- `export_results` - Save query results

**Why We Need It**:
- Users can ask SQL-like questions on uploaded data
- No need to import data into database
- Fast analytical queries

**Use Cases**:
- "Sum all expenses by category from this CSV"
- "Find top 10 customers by revenue"
- "Calculate monthly averages from sales data"

**Free?**: ✅ Yes - Open source, fully local

**Limitations**:
- Single-user, not multi-tenant
- No GPU acceleration
- Limited to file-based data

**Example Query**:
```sql
SELECT category, SUM(amount) as total
FROM 'uploaded_expenses.csv'
GROUP BY category
ORDER BY total DESC
```

---

### 🟡 Web Search & Grounding

#### Tavily MCP Server
**What It Does**: AI-optimized web search for grounding responses.

**Tools**:
- `search` - Find relevant web pages
- `extract` - Get structured data from results
- `get_content` - Fetch full page content

**Why We Need It**:
- Ground AI responses in current information
- Find sources users don't have uploaded
- Get up-to-date facts

**Use Cases**:
- "What are the latest tax law changes?"
- "Find recent case law on this topic"
- "Get current market rates"

**Free?**: ⚠️ Freemium - 1000 searches/month free, then $0.005/search

**Limitations**:
- Can't search private/paywalled content
- Rate limits on free tier
- No real-time data

**Alternative**: Exa (similar pricing), Brave Search API (cheaper)

---

### 🟡 Web Scraping & Data Extraction

#### Firecrawl MCP Server
**What It Does**: Scrape websites and convert to clean, structured data.

**Tools**:
- `scrape_url` - Get content from single page
- `crawl_site` - Scrape entire website
- `extract_structured` - Pull specific data patterns (prices, emails, etc.)
- `map_site` - Get sitemap of all URLs

**Why We Need It**:
- Import entire documentation sites
- Gather research from online sources
- Build knowledge base from web content

**Use Cases**:
- "Add all papers from this conference website"
- "Scrape this legal database for relevant cases"
- "Import documentation from this website"

**Free?**: ⚠️ Freemium - Limited free tier, paid plans start ~$20/month

**Limitations**:
- Rate limiting on target sites
- Some sites block scraping
- Ethical/legal considerations

**Alternative**: Playwright MCP (free, but requires more setup)

---

### 🟡 Document Processing

#### PaddleOCR MCP Server
**What It Does**: Advanced OCR with multilingual support.

**Tools**:
- `ocr_image` - Extract text from images
- `ocr_pdf` - Extract text from PDFs
- `structure_analysis` - Layout, tables, formulas
- `table_recognition` - Extract table structure
- `formula_recognition` - LaTeX formulas

**Why We Need It**:
- Better than Docling for handwritten docs
- 100+ languages supported
- Better for non-English documents

**Use Cases**:
- Handwritten notes
- Non-English documents
- Complex charts and diagrams

**Free?**: ✅ Yes - Open source, runs locally OR free API (beta)

**Modes**:
1. **Local** - Run on your machine (free, private)
2. **API** - Use Baidu's free beta API (easier setup)

**Limitations**:
- GPU recommended for speed
- No built-in image description (unlike Docling + Gemini)
- API may have rate limits

---

### 🟢 Graph Database

#### Neo4j MCP Server
**What It Does**: Store and query relationships between entities.

**Tools**:
- `execute_cypher` - Run graph queries
- `create_node` - Add entities
- `create_relationship` - Link entities
- `find_paths` - Discover connections
- `get_schema` - View graph structure

**Why We Need It**:
- Relationships matter in many domains
- Discover non-obvious connections
- Better than vector search for some queries

**Use Cases**:
- Lawyer: Track case → judge → precedent → ruling relationships
- Researcher: Map paper → author → institution → citations
- Business: Customer → product → supplier → location graphs

**Example Query**:
```cypher
MATCH (j1:Judge)-[:RULED]->(c1:Case)-[:CITED]->(c2:Case)<-[:RULED]-(j2:Judge)
WHERE j1.name = "Smith" AND j2.name = "Jones"
RETURN c1, c2
```

**Free?**: ✅ Yes - Community edition (single instance)

**Limitations**:
- Steep learning curve (Cypher language)
- Community edition doesn't cluster
- Enterprise features cost money

---

### 🟢 Productivity Integrations

#### Notion MCP Server (Official)
**What It Does**: Read/write Notion pages and databases.

**Tools**:
- `search_pages` - Find Notion pages
- `read_page` - Get page content
- `create_page` - Add new pages
- `update_database` - Modify database entries

**Why We Need It**: Many users store knowledge in Notion

**Free?**: ✅ Yes - If user has Notion account

**Limitations**:
- Requires user's Notion API key
- Limited by Notion's API rate limits

---

#### GitHub MCP Server (Official)
**What It Does**: Access repositories, issues, PRs.

**Tools**:
- `search_code` - Find code in repos
- `read_file` - Get file contents
- `list_issues` - View issues
- `create_issue` - Add issues

**Why We Need It**: Engineering students with code repositories

**Free?**: ✅ Yes - If user has GitHub account

**Limitations**:
- Requires GitHub authentication
- Private repos need permissions

---

### 🟢 Data Platforms

#### Airtable / Baserow MCP Servers
**What They Do**: Interact with spreadsheet-database hybrid platforms.

**Tools**:
- `query_table` - Get records
- `create_record` - Add new entries
- `update_record` - Modify data
- `delete_record` - Remove data

**Why Consider**: Users with existing data in these platforms

**Free?**:
- Airtable: ⚠️ Freemium (limited free tier)
- Baserow: ✅ Open source alternative

---

## Integration Priority Order

### Phase 1: Core Data Handling (Next 2 Weeks)
1. ✅ **Persistent Memory** (DONE - upgraded to SQLite)
2. 🔴 **Spreadsheet Analysis Tool** (custom)
3. 🔴 **Calculation Engine** (custom)
4. 🔴 **DuckDB MCP** (free, easy integration)

### Phase 2: Enhanced Document Processing (Weeks 3-4)
5. 🔴 **Document Structure Analyzer** (custom)
6. 🟡 **PaddleOCR MCP** (test vs Docling, then decide)
7. 🟡 **Tavily or Exa** (web search for grounding)

### Phase 3: Advanced Features (Month 2)
8. 🔴 **Qdrant MCP** (better vector storage)
9. 🟡 **Data Visualization** (custom)
10. 🟡 **Export/Report Generator** (custom)

### Phase 4: Specialized Use Cases (Month 3+)
11. 🟢 **Neo4j MCP** (graph relationships)
12. 🟢 **Firecrawl MCP** (web scraping)
13. 🟢 **Notion/GitHub MCP** (integrations)

---

## Future Custom Tools (Lower Priority)

### Workflow Automation
- Chain multiple tools together automatically
- Save and reuse common workflows
- Conditional logic in workflows

### Confidence & Provenance
- Add confidence scores to all responses
- Citation tracking (exact page/paragraph)
- Audit trail of what data was used

### Domain Templates
- Legal brief analysis template
- Financial report template
- Research paper analysis template
- Accounting audit template

### Collaboration Features
- Multi-user workspaces
- Shared knowledge bases
- Comments and annotations
- Version control for analyses

---

## Resources

- **Official MCP Registry**: https://github.com/modelcontextprotocol/servers
- **Awesome MCP List**: https://github.com/wong2/awesome-mcp-servers
- **MCP Free Directory**: https://www.mcpsurge.com/best/free-mcp-servers

---

## Decision Framework

When evaluating whether to build custom or use existing MCP:

**Build Custom If**:
- No good free MCP exists
- Highly specific to our use cases
- Need tight integration with RAGy
- Core differentiating feature

**Use Existing MCP If**:
- Good free option available
- Standard functionality
- Active maintenance
- Good documentation

---

## Testing Checklist

Before adding any MCP server:
- [ ] Test with sample data
- [ ] Verify it's actually free (not freemium trap)
- [ ] Check rate limits
- [ ] Test error handling
- [ ] Document limitations
- [ ] Create usage examples

---

*Last Updated: 2025-11-20*
