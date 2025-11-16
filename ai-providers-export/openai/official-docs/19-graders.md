# Graders

Graders
Manage and run graders in the OpenAI platform. Related guide: Graders
String Check Grader
A StringCheckGrader object that performs a string comparison between input and reference using a specified operation.

input
string
The input text. This may include template strings.
name
string
The name of the grader.
operation
string
The string check operation to perform. One of eq, ne, like, or ilike.
reference
string
The reference text. This may include template strings.
type
string
The object type, which is always string_check.
OBJECT String Check Grader

1
2
3
4
5
6
7
{
  "type": "string_check",
  "name": "Example string check grader",
  "input": "{{sample.output_text}}",
  "reference": "{{item.label}}",
  "operation": "eq"
}
Text Similarity Grader
A TextSimilarityGrader object which grades text based on similarity metrics.

evaluation_metric
string
The evaluation metric to use. One of cosine, fuzzy_match, bleu, gleu, meteor, rouge_1, rouge_2, rouge_3, rouge_4, rouge_5, or rouge_l.
input
string
The text being graded.
name
string
The name of the grader.
reference
string
The text being graded against.
type
string
The type of grader.
OBJECT Text Similarity Grader

1
2
3
4
5
6
7
{
  "type": "text_similarity",
  "name": "Example text similarity grader",
  "input": "{{sample.output_text}}",
  "reference": "{{item.label}}",
  "evaluation_metric": "fuzzy_match"
}
Score Model Grader
A ScoreModelGrader object that uses a model to assign a score to the input.

input
array
The input text. This may include template strings.

Show properties
model
string
The model to use for the evaluation.
name
string
The name of the grader.
range
array
The range of the score. Defaults to [0, 1].
sampling_params
object
The sampling parameters for the model.

Show properties
type
string
The object type, which is always score_model.
OBJECT Score Model Grader

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
{
    "type": "score_model",
    "name": "Example score model grader",
    "input": [
        {
            "role": "user",
            "content": (
                "Score how close the reference answer is to the model answer. Score 1.0 if they are the same and 0.0 if they are different."
                " Return just a floating point score\n\n"
                " Reference answer: {{item.label}}\n\n"
                " Model answer: {{sample.output_text}}"
            ),
        }
    ],
    "model": "o4-mini-2025-04-16",
    "sampling_params": {
        "temperature": 1,
        "top_p": 1,
        "seed": 42,
        "max_completions_tokens": 32768,
        "reasoning_effort": "medium"
    },
}
Label Model Grader
A LabelModelGrader object which uses a model to assign labels to each item in the evaluation.

input
array

Show properties
labels
array
The labels to assign to each item in the evaluation.
model
string
The model to use for the evaluation. Must support structured outputs.
name
string
The name of the grader.
passing_labels
array
The labels that indicate a passing result. Must be a subset of labels.
type
string
The object type, which is always label_model.
OBJECT Label Model Grader

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
{
  "name": "First label grader",
  "type": "label_model",
  "model": "gpt-4o-2024-08-06",
  "input": [
    {
      "type": "message",
      "role": "system",
      "content": {
        "type": "input_text",
        "text": "Classify the sentiment of the following statement as one of positive, neutral, or negative"
      }
    },
    {
      "type": "message",
      "role": "user",
      "content": {
        "type": "input_text",
        "text": "Statement: {{item.response}}"
      }
    }
  ],
  "passing_labels": [
    "positive"
  ],
  "labels": [
    "positive",
    "neutral",
    "negative"
  ]
}
Python Grader
A PythonGrader object that runs a python script on the input.

image_tag
string
The image tag to use for the python script.
name
string
The name of the grader.
source
string
The source code of the python script.
type
string
The object type, which is always python.
OBJECT Python Grader

1
2
3
4
5
6
7
8
9
10
11
12
13
14
{
  "type": "python",
  "name": "Example python grader",
  "image_tag": "2025-05-08",
  "source": """
def grade(sample: dict, item: dict) -> float:
    \"""
    Returns 1.0 if `output_text` equals `label`, otherwise 0.0.
    \"""
    output = sample.get("output_text")
    label = item.get("label")
    return 1.0 if output == label else 0.0
""",
}
Multi Grader
A MultiGrader object combines the output of multiple graders to produce a single score.

calculate_output
string
A formula to calculate the output based on grader results.
graders
object

Show possible types
name
string
The name of the grader.
type
string
The object type, which is always multi.
OBJECT Multi Grader

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
{
  "type": "multi",
  "name": "example multi grader",
  "graders": [
    {
      "type": "text_similarity",
      "name": "example text similarity grader",
      "input": "The graded text",
      "reference": "The reference text",
      "evaluation_metric": "fuzzy_match"
    },
    {
      "type": "string_check",
      "name": "Example string check grader",
      "input": "{{sample.output_text}}",
      "reference": "{{item.label}}",
      "operation": "eq"
    }
  ],
  "calculate_output": "0.5 * text_similarity_score +  0.5 * string_check_score)"
}
Run grader
Beta
POST
 
https://api.openai.com/v1/fine_tuning/alpha/graders/run
Run a grader.
Request body
grader
object
Required
The grader used for the fine-tuning job.

Show possible types
model_sample
string
Required
The model sample to be evaluated. This value will be used to populate the sample namespace. See the guide for more details. The output_json variable will be populated if the model sample is a valid JSON string.
item
object
Optional
The dataset item provided to the grader. This will be used to populate the item namespace. See the guide for more details.
Returns
The results from the grader run.

Example request
curl

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
curl -X POST https://api.openai.com/v1/fine_tuning/alpha/graders/run \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "grader": {
      "type": "score_model",
      "name": "Example score model grader",
      "input": [
        {
          "role": "user",
          "content": "Score how close the reference answer is to the model
answer. Score 1.0 if they are the same and 0.0 if they are different. Return just a floating point score\n\nReference answer: {{item.reference_answer}}\n\nModel answer: {{sample.output_text}}"
        }
      ],
      "model": "gpt-4o-2024-08-06",
      "sampling_params": {
        "temperature": 1,
        "top_p": 1,
        "seed": 42
      }
    },
    "item": {
      "reference_answer": "fuzzy wuzzy was a bear"
    },
    "model_sample": "fuzzy wuzzy was a bear"
  }'
Response

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
{
  "reward": 1.0,
  "metadata": {
    "name": "Example score model grader",
    "type": "score_model",
    "errors": {
      "formula_parse_error": false,
      "sample_parse_error": false,
      "truncated_observation_error": false,
      "unresponsive_reward_error": false,
      "invalid_variable_error": false,
      "other_error": false,
      "python_grader_server_error": false,
      "python_grader_server_error_type": null,
      "python_grader_runtime_error": false,
      "python_grader_runtime_error_details": null,
      "model_grader_server_error": false,
      "model_grader_refusal_error": false,
      "model_grader_parse_error": false,
      "model_grader_server_error_details": null
    },
    "execution_time": 4.365238428115845,
    "scores": {},
    "token_usage": {
      "prompt_tokens": 190,
      "total_tokens": 324,
      "completion_tokens": 134,
      "cached_tokens": 0
    },
    "sampled_model_name": "gpt-4o-2024-08-06"
  },
  "sub_rewards": {},
  "model_grader_token_usage_per_model": {
    "gpt-4o-2024-08-06": {
      "prompt_tokens": 190,
      "total_tokens": 324,
      "completion_tokens": 134,
      "cached_tokens": 0
    }
  }
}
Validate grader
Beta
POST
 
https://api.openai.com/v1/fine_tuning/alpha/graders/validate
Validate a grader.
Request body
grader
object
Required
The grader used for the fine-tuning job.

Show possible types
Returns
The validated grader object.

Example request
curl

1
2
3
4
5
6
7
8
9
10
11
12
curl https://api.openai.com/v1/fine_tuning/alpha/graders/validate \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "grader": {
      "type": "string_check",
      "name": "Example string check grader",
      "input": "{{sample.output_text}}",
      "reference": "{{item.label}}",
      "operation": "eq"
    }
  }'
Response

1
2
3
4
5
6
7
8
9
{
  "grader": {
    "type": "string_check",
    "name": "Example string check grader",
    "input": "{{sample.output_text}}",
    "reference": "{{item.label}}",
    "operation": "eq"
  }
}