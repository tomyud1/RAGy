# RAGy Tests

## Structure

```
tests/
├── unit/                    # Unit tests (fast, isolated)
│   ├── services/            # Backend service tests
│   ├── middleware/          # Express middleware tests
│   └── components/          # React component tests
├── integration/             # Integration tests (slower, test interactions)
├── setup.js                 # Test setup and global mocks
└── README.md                # This file
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- tests/unit/middleware/error-handler.test.js
```

## Writing Tests

### Unit Tests

Unit tests should be fast and isolated. Mock external dependencies.

```javascript
import { describe, it, expect, vi } from 'vitest';
import { myFunction } from '../../../server/services/my-service.js';

describe('myFunction', () => {
  it('should do something', () => {
    expect(myFunction()).toBe(expected);
  });
});
```

### Testing Async Code

```javascript
it('should handle async operations', async () => {
  const result = await asyncFunction();
  expect(result).toBeDefined();
});
```

### Mocking

```javascript
import { vi } from 'vitest';

// Mock a module
vi.mock('../../../server/services/database.js', () => ({
  query: vi.fn().mockResolvedValue([]),
}));

// Mock fetch
global.fetch = vi.fn().mockResolvedValue({
  ok: true,
  json: () => Promise.resolve({ data: 'test' }),
});
```

### Testing Express Middleware

```javascript
const mockReq = { body: { name: 'test' } };
const mockRes = {
  status: vi.fn().mockReturnThis(),
  json: vi.fn(),
};
const mockNext = vi.fn();

myMiddleware(mockReq, mockRes, mockNext);

expect(mockNext).toHaveBeenCalled();
```

## Best Practices

1. **One assertion per test when possible** - Makes failures easier to debug
2. **Use descriptive test names** - `it('should return 404 when user not found')`
3. **Arrange-Act-Assert pattern** - Setup, execute, verify
4. **Test edge cases** - Empty inputs, null values, boundaries
5. **Don't test implementation details** - Test behavior, not how it works
6. **Keep tests fast** - Mock slow dependencies

## Coverage Goals

- **Services**: 80%+ coverage
- **Middleware**: 90%+ coverage (critical path)
- **Utilities**: 80%+ coverage
- **Components**: 60%+ coverage (focus on logic-heavy components)

